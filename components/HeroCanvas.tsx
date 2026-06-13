import React, { useEffect, useRef } from 'react';

/**
 * Living-system node network — the site's kinetic signature.
 *
 * A field of drifting nodes that wire themselves together when close, forming
 * an automation/data graph that leans toward the pointer. Rendered on a 2D
 * canvas with additive glow for a premium look at 60fps.
 *
 * Progressive enhancement baked in:
 *  - prefers-reduced-motion → renders ONE static frame, no animation loop
 *  - pauses when the tab is hidden or the hero scrolls offscreen
 *  - node count + pixel ratio scale down on small/touch screens
 *  - pointer interaction is desktop/fine-pointer only
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number; // 0.35–1 — parallax + brightness
  r: number;
}

const ACCENT = { r: 59, g: 130, b: 246 }; // #3B82F6

const HeroCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let rafId = 0;
    let running = false;

    const pointer = { x: -9999, y: -9999, active: false };

    const buildNodes = () => {
      const area = width * height;
      // Denser graph — ~1 node per 9k px², capped. Fewer on small screens.
      const target = Math.min(width < 640 ? 64 : 175, Math.round(area / 9000));
      nodes = Array.from({ length: target }, () => {
        const depth = 0.35 + Math.random() * 0.65;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18 * depth,
          vy: (Math.random() - 0.5) * 0.18 * depth,
          depth,
          r: (0.8 + Math.random() * 1.6) * depth,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const maxDist = () => (width < 640 ? 150 : 205);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const md = maxDist();
      const md2 = md * md;

      // Connections (drawn first, under the glowing nodes).
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > md2) continue;
          const t = 1 - Math.sqrt(d2) / md;
          const alpha = t * 0.34 * Math.min(a.depth, b.depth);
          ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha})`;
          ctx.lineWidth = t > 0.7 ? 1.2 : 0.9;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Pointer "synapse" links + glow.
      if (pointer.active) {
        const pr = 220;
        const pr2 = pr * pr;
        for (const n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > pr2) continue;
          const t = 1 - Math.sqrt(d2) / pr;
          ctx.strokeStyle = `rgba(96,165,250,${t * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      // Nodes with additive glow.
      ctx.globalCompositeOperation = 'lighter';
      for (const n of nodes) {
        const glow = n.r * 4;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glow);
        g.addColorStop(0, `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${0.5 * n.depth})`);
        g.addColorStop(1, 'rgba(59,130,246,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, glow, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(219,234,254,${0.75 * n.depth})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const step = () => {
      const md = maxDist();
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // Pointer attraction — the network leans toward the cursor.
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          const r = 220;
          if (d2 < r * r && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / r) * 0.04 * n.depth;
            n.vx += (dx / d) * f;
            n.vy += (dy / d) * f;
          }
        }

        // Gentle damping so velocities stay calm.
        n.vx *= 0.99;
        n.vy *= 0.99;

        // Wrap around edges with a margin for seamless flow.
        const m = md;
        if (n.x < -m) n.x = width + m;
        if (n.x > width + m) n.x = -m;
        if (n.y < -m) n.y = height + m;
        if (n.y > height + m) n.y = -m;
      }
      draw();
      if (running) rafId = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      rafId = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    // Pointer (desktop / fine pointer only).
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    // Pause when offscreen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    const onVisibility = () => {
      if (document.hidden) stop();
      else io.takeRecords(), start();
    };

    resize();
    draw(); // paint an immediate first frame (also the static frame for reduced motion)

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    if (finePointer) {
      window.addEventListener('pointermove', onPointerMove);
      canvas.addEventListener('pointerleave', onPointerLeave);
    }
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
};

export default HeroCanvas;

import React, { useEffect, useRef } from 'react';

/**
 * Magnetic custom cursor — a fast inner dot + a lerped outer ring that
 * magnetically eases toward (and enlarges over) interactive elements.
 *
 * Desktop / fine-pointer only. Disabled entirely for touch devices and for
 * users who prefer reduced motion (native cursor stays).
 */
const INTERACTIVE = 'a, button, [data-cursor], input, textarea, select, [role="button"]';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add('cursor-none');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx, dy = my; // dot (fast)
    let rx = mx, ry = my; // ring (lerped)
    let hovered: Element | null = null;
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const onOver = (e: Event) => {
      const t = e.target as Element;
      hovered = t.closest?.(INTERACTIVE) ?? null;
    };

    const onLeaveWindow = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const tick = () => {
      // Dot tracks the pointer almost exactly.
      dx += (mx - dx) * 0.35;
      dy += (my - dy) * 0.35;

      // Ring eases more slowly; when hovering an element it's magnetically
      // pulled toward that element's centre.
      let tx = mx;
      let ty = my;
      if (hovered) {
        const r = hovered.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        tx = mx + (cx - mx) * 0.35;
        ty = my + (cy - my) * 0.35;
      }
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;

      const scale = hovered ? 2.4 : 1;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scale})`;
      ring.style.opacity = visible ? (hovered ? '0.9' : '0.5') : '0';

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeaveWindow);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.documentElement.classList.remove('cursor-none');
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border border-white opacity-0 mix-blend-difference will-change-transform"
        style={{ transition: 'opacity 0.3s ease' }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-accent opacity-0 will-change-transform"
        style={{ transition: 'opacity 0.3s ease' }}
      />
    </>
  );
};

export default CustomCursor;

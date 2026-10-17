"use client";

import * as React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const useIsoLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
  description?: string;
  meta?: { label: string; value: string }[];
}
export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  rotate?: number;
  depth?: number;
  perspective?: number;
  falloff?: number;
  fade?: number;
  cardWidth?: string;
  gap?: number;
  loop?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  label?: string;
  className?: string;
  cardClassName?: string;
}

/** Adapted from the supplied CoverflowCarousel: subject links, German controls,
 * time-based settling, cancellation, and an instant reduced-motion path. */
export function CoverflowCarousel({
  slides, rotate = 38, depth = .42, perspective = 3,
  falloff = .56, fade = .12, cardWidth = 'clamp(220px, 30vw, 320px)',
  gap = -.06, loop = true, showCaption = true,
  showPagination = true, showNavigation = true,
  label = 'Fachbereich auswählen', className, cardClassName,
}: CoverflowCarouselProps) {
  const count = slides.length;
  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const reduceRef = React.useRef(false);
  const suppressClickRef = React.useRef(false);
  const dragRef = React.useRef<{
    id: number; x: number; pos: number; v: number; t: number; moved: boolean;
  } | null>(null);
  const [selected, setSelected] = React.useState(0);
  const indexAt = React.useCallback((pos: number) => {
    const n = Math.max(1, count);
    return ((Math.round(pos) % n) + n) % n;
  }, [count]);
  const clamp = React.useCallback((pos: number) => loop ? pos : Math.max(0, Math.min(count - 1, pos)), [count, loop]);

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width || !count) return;
    const pitch = width * (1 + gap);
    cardRefs.current.forEach((card, index) => {
      if (!card || index >= count) return;
      let offset = index - posRef.current;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }
      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
      card.style.transform = `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(count + 1 - Math.round(distance));
      card.style.pointerEvents = edge < .1 ? 'none' : 'auto';
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback((target: number, instant = false) => {
    if (!count) return;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    targetRef.current = target;
    const next = indexAt(target);
    const focused = cardRefs.current.indexOf(document.activeElement as HTMLAnchorElement);
    if (focused !== -1 && focused !== next) frameRef.current?.focus({ preventScroll: true });
    setSelected(next);
    if (instant || reduceRef.current) {
      posRef.current = target;
      rafRef.current = null;
      paint();
      return;
    }
    const from = posRef.current;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / 240);
      const eased = 1 - Math.pow(1 - progress, 4);
      posRef.current = from + (target - from) * eased;
      paint();
      rafRef.current = progress < 1 ? requestAnimationFrame(step) : null;
    };
    rafRef.current = requestAnimationFrame(step);
  }, [count, indexAt, paint]);

  const goTo = React.useCallback((index: number, instant = false) => {
    if (!count) return;
    const target = loop ? index + Math.round((targetRef.current - index) / count) * count : index;
    settle(clamp(target), instant);
  }, [clamp, count, loop, settle]);
  const nudge = (by: number, instant = false) => settle(clamp(Math.round(targetRef.current) + by), instant);

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => {
      widthRef.current = cardRefs.current[0]?.offsetWidth ?? 0;
      paint();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);
  React.useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      reduceRef.current = media.matches;
      if (media.matches) settle(targetRef.current, true);
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [settle]);
  React.useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);
  React.useEffect(() => {
    cardRefs.current.length = count;
    if (selected >= count && count > 0) goTo(0, true);
  }, [count, selected, goTo]);

  const endDrag = (event: React.PointerEvent<HTMLDivElement>, cancelled = false) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    if (!drag.moved) return;
    const recentVelocity = performance.now() - drag.t < 100 ? drag.v : 0;
    const carried = cancelled ? 0 : Math.max(-1, Math.min(1, recentVelocity * .14));
    settle(clamp(Math.round(posRef.current + carried)));
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const active = slides[selected] ?? slides[0];
  if (!active) return null;
  return (
    <div className={cn('cf-carousel w-full', className)}
      style={{ '--cf-card': cardWidth } as React.CSSProperties}
      role="region" aria-roledescription="Karussell" aria-label={label}>
      <div className="cf-frame" ref={frameRef} tabIndex={0}
        aria-label="Fachauswahl. Mit den Pfeiltasten blättern, mit Tab zum ausgewählten Fach."
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault(); nudge(event.key === 'ArrowLeft' ? -1 : 1, true);
          } else if (event.key === 'Home' || event.key === 'End') {
            event.preventDefault(); goTo(event.key === 'Home' ? 0 : count - 1, true);
          }
        }}
        onPointerDown={event => {
          if (!event.isPrimary || event.button !== 0 || dragRef.current) return;
          if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
          suppressClickRef.current = false;
          targetRef.current = posRef.current;
          dragRef.current = { id: event.pointerId, x: event.clientX, pos: posRef.current, v: 0, t: performance.now(), moved: false };
        }}
        onPointerMove={event => {
          const drag = dragRef.current;
          if (!drag || drag.id !== event.pointerId || !widthRef.current) return;
          if (!drag.moved && Math.abs(event.clientX - drag.x) < 8) return;
          if (!drag.moved) {
            drag.moved = true;
            suppressClickRef.current = true;
            event.currentTarget.focus({ preventScroll: true });
            event.currentTarget.setPointerCapture(event.pointerId);
          }
          const now = performance.now();
          const previous = posRef.current;
          posRef.current = clamp(drag.pos - (event.clientX - drag.x) / (widthRef.current * (1 + gap)));
          drag.v = (posRef.current - previous) / Math.max(now - drag.t, 1) * 1000;
          drag.t = now;
          setSelected(indexAt(posRef.current));
          paint();
        }}
        onPointerUp={event => endDrag(event)} onPointerCancel={event => endDrag(event, true)}
        onLostPointerCapture={event => { if (dragRef.current?.id === event.pointerId) endDrag(event, true); }}
        style={{ perspective: `calc(var(--cf-card) * ${perspective})`, touchAction: 'pan-y' }}>
        <div className="cf-stage">
          {slides.map((slide, index) => (
            <a key={slide.href} ref={node => { cardRefs.current[index] = node; }}
              href={slide.href} tabIndex={index === selected ? 0 : -1}
              aria-hidden={index !== selected}
              aria-label={`${slide.title} öffnen, ${slide.subtitle}`}
              aria-current={index === selected ? 'true' : undefined}
              className={cn('cf-card', cardClassName)}
              onClick={event => {
                if (suppressClickRef.current && event.detail !== 0) { event.preventDefault(); suppressClickRef.current = false; return; }
                suppressClickRef.current = false;
                if (index !== selected) { event.preventDefault(); goTo(index); }
              }}
              onDragStart={event => event.preventDefault()}>
              <img src={slide.src} alt={slide.alt} draggable={false} width="800" height="800" />
              <span className="cf-card-content">
                <span className="cf-class">{slide.subtitle}</span>
                <strong>{slide.title}</strong>
                <span className="cf-card-action">Angebote öffnen <ArrowRight size={18} aria-hidden="true" /></span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="cf-toolbar">
        {showNavigation && <button type="button" className="cf-arrow" aria-label="Vorherigen Fachbereich auswählen"
          disabled={count < 2 || (!loop && selected === 0)} onClick={event => nudge(-1, event.detail === 0)}><ChevronLeft size={22} aria-hidden="true" /></button>}
        <div className="cf-caption" aria-live="polite" aria-atomic="true">
          {showCaption && <><span className="cf-count">{selected + 1} / {count}</span><p>{active.description}</p></>}
        </div>
        {showNavigation && <button type="button" className="cf-arrow" aria-label="Nächsten Fachbereich auswählen"
          disabled={count < 2 || (!loop && selected === count - 1)} onClick={event => nudge(1, event.detail === 0)}><ChevronRight size={22} aria-hidden="true" /></button>}
      </div>
      {showPagination && <div className="cf-pagination" role="group" aria-label="Fachbereich direkt auswählen">
        {slides.map((slide, index) => <button type="button" key={slide.href}
          aria-label={`${slide.title} auswählen`} aria-current={selected === index ? 'true' : undefined}
          onClick={event => goTo(index, event.detail === 0)}><span aria-hidden="true" /></button>)}
      </div>}
      <p className="cf-hint">Wischen oder mit den Pfeilen blättern. Karte antippen, um den Bereich zu öffnen.</p>
    </div>
  );
}

import * as React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CoverflowCarousel } from '../src/components/ui/coverflow-carousel';

class TouchPointerEvent extends MouseEvent {
  pointerId: number;
  pointerType: string;
  isPrimary: boolean;
  constructor(type: string, init: PointerEventInit = {}) {
    super(type, { bubbles: true, cancelable: true, ...init });
    this.pointerId = init.pointerId ?? 7;
    this.pointerType = init.pointerType ?? 'touch';
    this.isPrimary = init.isPrimary ?? true;
  }
}
let now = 1000;
let frames: Map<number, FrameRequestCallback>;
let frameId = 0;
const slides = ['Wirtschaft', 'Deutsch', 'Englisch', 'Schulleben'].map((title, i) => ({
  title, subtitle: `Bereich ${i + 1}`, src: `/subject-${i}.jpg`, alt: title,
  href: `#bereich-${i}`, description: title,
}));
function setup() {
  const result = render(<CoverflowCarousel slides={slides} />);
  return { frame: result.container.querySelector('.cf-frame')!, card: screen.getByRole('link', { name: /Wirtschaft öffnen/ }) };
}
function pointer(element: Element, type: string, x: number, y = 100, pointerType = 'touch') {
  now += 16;
  fireEvent(element, new TouchPointerEvent(type, { clientX: x, clientY: y, pointerType, button: 0, buttons: type === 'pointerup' ? 0 : 1 }));
}
function finish(frame: Element, x: number, y = 100, pointerType = 'touch') {
  now += 150; // The finger pauses before release: no flick velocity.
  pointer(frame, 'pointerup', x, y, pointerType);
  act(() => {
    now += 300;
    const pending = [...frames.values()]; frames.clear();
    pending.forEach(callback => callback(now));
  });
}
beforeEach(() => {
  now = 1000; frameId = 0; frames = new Map();
  vi.spyOn(performance, 'now').mockImplementation(() => now);
  vi.stubGlobal('PointerEvent', TouchPointerEvent);
  vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} });
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener() {}, removeEventListener() {} }));
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => { frames.set(++frameId, cb); return frameId; });
  vi.stubGlobal('cancelAnimationFrame', (id: number) => frames.delete(id));
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(240);
  Object.defineProperties(HTMLElement.prototype, {
    setPointerCapture: { configurable: true, value: vi.fn() },
    hasPointerCapture: { configurable: true, value: () => false },
    releasePointerCapture: { configurable: true, value: vi.fn() },
  });
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

describe('Coverflow touch gesture', () => {
  it('continues a finger swipe after the touched card transfers implicit capture to the frame', () => {
    const { frame, card } = setup();
    pointer(card, 'pointerdown', 220);
    pointer(card, 'pointermove', 208);
    // Touch browsers fire this on the card when the frame takes capture.
    // The event bubbles; it does not mean the frame lost its gesture.
    fireEvent(card, new TouchPointerEvent('lostpointercapture'));
    pointer(frame, 'pointermove', 40);
    finish(frame, 40);
    expect(screen.getByRole('link', { name: /Deutsch öffnen/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Deutsch auswählen' }).getAttribute('aria-current')).toBe('true');
  });
  it('ends the gesture when capture is actually lost by the frame itself', () => {
    const { frame, card } = setup();
    pointer(card, 'pointerdown', 220);
    pointer(frame, 'pointermove', 208);
    fireEvent(frame, new TouchPointerEvent('lostpointercapture'));
    pointer(frame, 'pointermove', 40);
    finish(frame, 40);
    expect(screen.getByRole('button', { name: 'Wirtschaft auswählen' }).getAttribute('aria-current')).toBe('true');
  });
  it('keeps a vertical page scroll from turning into a carousel swipe', () => {
    const { frame, card } = setup();
    pointer(card, 'pointerdown', 220, 100);
    pointer(card, 'pointermove', 208, 220);
    pointer(frame, 'pointermove', 40, 300);
    finish(frame, 40, 300);
    expect(screen.getByRole('button', { name: 'Wirtschaft auswählen' }).getAttribute('aria-current')).toBe('true');
  });
  it('still supports mouse dragging', () => {
    const { frame, card } = setup();
    pointer(card, 'pointerdown', 220, 100, 'mouse');
    pointer(frame, 'pointermove', 40, 100, 'mouse');
    finish(frame, 40, 100, 'mouse');
    expect(screen.getByRole('button', { name: 'Deutsch auswählen' }).getAttribute('aria-current')).toBe('true');
  });
  it('suppresses the click produced by a completed swipe', () => {
    const { frame, card } = setup();
    pointer(card, 'pointerdown', 220);
    pointer(frame, 'pointermove', 40);
    finish(frame, 40);
    const click = new MouseEvent('click', { bubbles: true, cancelable: true, detail: 1 });
    fireEvent(screen.getByRole('link', { name: /Deutsch öffnen/ }), click);
    expect(click.defaultPrevented).toBe(true);
  });
  it('keeps a tap on a selected card as a normal link activation', () => {
    const { card } = setup();
    pointer(card, 'pointerdown', 220);
    pointer(card, 'pointerup', 220);
    const click = new MouseEvent('click', { bubbles: true, cancelable: true, detail: 1 });
    fireEvent(card, click);
    expect(click.defaultPrevented).toBe(false);
  });
});

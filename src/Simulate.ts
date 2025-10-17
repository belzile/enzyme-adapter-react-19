import React from 'react';

export const ELEMENT_NODE = 1;
export const TEXT_NODE = 3;
export const COMMENT_NODE = 8;
export const DOCUMENT_NODE = 9;
export const DOCUMENT_FRAGMENT_NODE = 11;

function isDOMComponent(inst) {
  return !!(inst && inst.nodeType === ELEMENT_NODE && inst.tagName);
}

function isCompositeComponent(inst) {
  if (isDOMComponent(inst)) {
    // Accessing inst.setState warns; just return false as that'll be what
    // this returns when we have DOM nodes as refs directly
    return false;
  }
  return (
    inst != null &&
    typeof inst.render === 'function' &&
    typeof inst.setState === 'function'
  );
}

const Simulate = {};

const directDispatchEventTypes = new Set([
  'mouseEnter',
  'mouseLeave',
  'pointerEnter',
  'pointerLeave',
]);

/**
 * Exports:
 *
 * - `Simulate.click(Element)`
 * - `Simulate.mouseMove(Element)`
 * - `Simulate.change(Element)`
 * - ... (All keys from event plugin `eventTypes` objects)
 */
function makeSimulator(eventType) {
  return function(domNode, eventData) {
    console.table({ eventData, eventType, domNode })
    console.log('Simulation like this has not yet been implemented')
  };
}

// A one-time snapshot with no plans to update. We'll probably want to deprecate Simulate API.
const simulatedEventTypes = [
  'blur',
  'cancel',
  'click',
  'close',
  'contextMenu',
  'copy',
  'cut',
  'auxClick',
  'doubleClick',
  'dragEnd',
  'dragStart',
  'drop',
  'focus',
  'input',
  'invalid',
  'keyDown',
  'keyPress',
  'keyUp',
  'mouseDown',
  'mouseUp',
  'paste',
  'pause',
  'play',
  'pointerCancel',
  'pointerDown',
  'pointerUp',
  'rateChange',
  'reset',
  'resize',
  'seeked',
  'submit',
  'touchCancel',
  'touchEnd',
  'touchStart',
  'volumeChange',
  'drag',
  'dragEnter',
  'dragExit',
  'dragLeave',
  'dragOver',
  'mouseMove',
  'mouseOut',
  'mouseOver',
  'pointerMove',
  'pointerOut',
  'pointerOver',
  'scroll',
  'toggle',
  'touchMove',
  'wheel',
  'abort',
  'animationEnd',
  'animationIteration',
  'animationStart',
  'canPlay',
  'canPlayThrough',
  'durationChange',
  'emptied',
  'encrypted',
  'ended',
  'error',
  'gotPointerCapture',
  'load',
  'loadedData',
  'loadedMetadata',
  'loadStart',
  'lostPointerCapture',
  'playing',
  'progress',
  'seeking',
  'stalled',
  'suspend',
  'timeUpdate',
  'transitionEnd',
  'waiting',
  'mouseEnter',
  'mouseLeave',
  'pointerEnter',
  'pointerLeave',
  'change',
  'select',
  'beforeInput',
  'compositionEnd',
  'compositionStart',
  'compositionUpdate',
];
function buildSimulators() {
  simulatedEventTypes.forEach(eventType => {
    Simulate[eventType] = makeSimulator(eventType);
  });
}
buildSimulators();

export {
  Simulate,
}
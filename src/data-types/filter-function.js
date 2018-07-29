import {any, Method} from "utils";

export const blur = (radius) => new Method('blur').required(any(radius, Unit.PX)).build();

export const brightness = (amount) => new Method('brightness').required(any(amount, Unit.NONE)).build();

export const contrast = (amount) => new Method('contrast').required(any(amount, Unit.NONE)).build();

export const dropShadow = (offsetX, offsetY, blurRadius, spreadRadius, color) => new Method('drop-shadow')
    .required(any(offsetX, Unit.PX), any(offsetY, Unit.PX))
    .optional(any(blurRadius, Unit.PX), any(spreadRadius, Unit.PX), color)
    .build();

export const grayscale = (amount) => new Method('grayscale').required(any(amount, Unit.NONE)).build();

export const hueRotate = (angle) => new Method('hue-rotate').required(any(angle, Unit.DEG)).build();

export const invert = (amount) => new Method('invert').required(any(amount, Unit.NONE)).build();

export const opacity = (amount) => new Method('opacity').required(any(amount, Unit.NONE)).build();

export const saturate = (amount) => new Method('saturate').required(any(amount, Unit.NONE)).build();

export const sepia = (amount) => new Method('sepia').required(any(amount, Unit.NONE)).build();

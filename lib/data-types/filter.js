import { any, Method } from 'utils';
import { Unit } from 'data-types/unit';

export class Filter {

    static blur = (radius) => new Method('blur').required(any(radius, Unit.PX)).build();

    static brightness = (amount) => new Method('brightness').required(any(amount, Unit.NONE)).build();

    static contrast = (amount) => new Method('contrast').required(any(amount, Unit.NONE)).build();

    static dropShadow = (offsetX, offsetY, blurRadius, spreadRadius, color) => new Method('drop-shadow')
        .required(any(offsetX, Unit.PX), any(offsetY, Unit.PX))
        .optional(any(blurRadius, Unit.PX), any(spreadRadius, Unit.PX), color)
        .build();

    static grayscale = (amount) => new Method('grayscale').required(any(amount, Unit.NONE)).build();

    static hueRotate = (angle) => new Method('hue-rotate').required(any(angle, Unit.DEG)).build();

    static invert = (amount) => new Method('invert').required(any(amount, Unit.NONE)).build();

    static opacity = (amount) => new Method('opacity').required(any(amount, Unit.NONE)).build();

    static saturate = (amount) => new Method('saturate').required(any(amount, Unit.NONE)).build();

    static sepia = (amount) => new Method('sepia').required(any(amount, Unit.NONE)).build();

}

import { any, Method } from 'utils';
import { Unit } from 'data-types/unit';

export const Gradient = {};

/**
 * @example
 * Gradient.Linear.toTopLeft(45, '#ff0000', '#0000ff')
 * linear-gradient(45deg to top left, #ff0000, #0000ff)
 * @example
 * Gradient.linear.toBottom(0, ['#ff0000', 50], ['#0000ff', '10%'])
 * linear-gradient(0 to bottom, #ff0000 50px, #0000ff 10%)
 */
Gradient.Linear = class {

    static Direction = {
        TOP: 'top',
        BOTTOM: 'bottom',
        LEFT: 'left',
        RIGHT: 'right',
        TOP_LEFT: 'top left',
        TOP_RIGHT: 'top right',
        BOTTOM_LEFT: 'bottom left',
        BOTTOM_RIGHT: 'bottom right'
    };

    static generic = (method, angle, direction, ...stops) => new Method(method)
        .required(any(angle, Unit.DEG) + ' to ' + direction)
        .required(...stops.map(stop => {
            if (Array.isArray(stop) && stop.length) {
                let res = stop[0];
                if (stop.length > 1) {
                    res += ' ' + any(stop[1], Unit.PX);
                }
                return res;
            }
        }))
        .build();

    static normal = (angle, direction, ...stops) => Gradient.Linear.normal('linear-gradient', angle, direction, ...stops);

    static toTop = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.TOP, ...stops);
    static toLeft = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.LEFT, ...stops);
    static toRight = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.RIGHT, ...stops);
    static toBottom = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.BOTTOM, ...stops);
    static toTopLeft = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.TOP_LEFT, ...stops);
    static toTopRight = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.TOP_RIGHT, ...stops);
    static toBottomLeft = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.BOTTOM_LEFT, ...stops);
    static toBottomRight = (angle, ...stops) => Gradient.Linear.normal(angle, Gradient.Linear.Direction.BOTTOM_RIGHT, ...stops);
};

/**
 * @example
 * Gradient.Linear.Repeating.toTopLeft(45, '#ff0000', '#0000ff')
 * repeating-linear-gradient(45deg to top left, #ff0000, #0000ff)
 * @example
 * Gradient.linear.Repeating.toBottom(0, ['#ff0000', 50], ['#0000ff', '10%'])
 * repeating-linear-gradient(0 to bottom, #ff0000 50px, #0000ff 10%)
 */
Gradient.Linear.Repeating = class {
    static repeating = (angle, direction, ...stops) => Gradient.Linear.normal('repeating-linear-gradient', angle, direction, ...stops);

    static toTop = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.TOP, ...stops);
    static toLeft = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.LEFT, ...stops);
    static toRight = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.RIGHT, ...stops);
    static toBottom = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.BOTTOM, ...stops);
    static toTopLeft = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.TOP_LEFT, ...stops);
    static toTopRight = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.TOP_RIGHT, ...stops);
    static toBottomLeft = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.BOTTOM_LEFT, ...stops);
    static toBottomRight = (angle, ...stops) => Gradient.Linear.repeating(angle, Gradient.Linear.Direction.BOTTOM_RIGHT, ...stops);
};

/**
 * @example
 * Gradient.Radial.circle(10, [20,20], '#ff0000', '#0000ff')
 * radial-gradient(circle 10px at 20px 20px, #ff0000, #0000ff)
 * @example
 * Gradient.Radial.ellipse([10,30], ['20%','10%'], ['#ff0000', 50], ['#0000ff', '10%'])
 * radial-gradient(ellipse 10px 30px at 20% 10%, #ff0000 50px, #0000ff 10%)
 */
Gradient.Radial = class {

    static Shape = {
        CIRCLE: 'circle',
        ELLIPSE: 'ellipse'
    };

    static Extent = {
        CLOSEST_SIDE: 'closest-side',
        CLOSEST_CORNER: 'closest-corner',
        FARTHEST_SIDE: 'farthest-side',
        FARTHEST_CORNER: 'farthest-corner'
    };

    static generic = (method, shape, size, position, ...stops) => new Method(method)
        .required(shape + ' ' + any(size, Unit.PX) + ' at ' + any(position, Unit.PX))
        .required(...stops.map(stop => {
            if (Array.isArray(stop) && stop.length) {
                let res = stop[0];
                if (stop.length > 1) {
                    res += ' ' + any(stop[1], Unit.PX);
                }
                return res;
            }
        }))
        .build();

    static normal = (shape, size, position, ...stops) => Gradient.Linear.generic('radial-gradient', shape, size, position, ...stops);

    static circle = (size, position, ...stops) => Gradient.Radial.normal(Gradient.Radial.Shape.CIRCLE, size, position, ...stops);
    static ellipse = (size, position, ...stops) => Gradient.Radial.normal(Gradient.Radial.Shape.ELLIPSE, size, position, ...stops);
};

/**
 * @example
 * Gradient.Radial.Repeating.circle(10, [20,20], '#ff0000', '#0000ff')
 * repeating-radial-gradient(circle 10px at 20px 20px, #ff0000, #0000ff)
 * @example
 * Gradient.Radial.Repeating.ellipse([10,30], ['20%','10%'], ['#ff0000', 50], ['#0000ff', '10%'])
 * repeating-radial-gradient(ellipse 10px 30px at 20% 10%, #ff0000 50px, #0000ff 10%)
 */
Gradient.Radial.Repeating = class {

    static repeating = (shape, size, position, ...stops) => Gradient.Linear.generic('repeating-radial-gradient', shape, size, position, ...stops);

    static circle = (size, position, ...stops) => Gradient.Radial.repeating(Gradient.Radial.Shape.CIRCLE, size, position, ...stops);
    static ellipse = (size, position, ...stops) => Gradient.Radial.repeating(Gradient.Radial.Shape.ELLIPSE, size, position, ...stops);
};

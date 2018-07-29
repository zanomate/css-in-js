import {any, Method} from "utils";

export class Gradient {

    static Direction = {
        TOP: 'to top',
        BOTTOM: 'to bottom',
        LEFT: 'to left',
        RIGHT: 'to right',
        TOP_LEFT: 'to top left',
        TOP_RIGHT: 'to tio right',
        BOTTOM_LEFT: 'to bottom left',
        BOTTOM_RIGHT: 'to bottom right'
    };

    /**
     * @example
     * Gradient.linear(Gradient.Direction.LEFT, '#ff0000', '#0000ff')
     * linear-gradient(to left, ff0000, 0000ff)
     * @example
     * Gradient.linear(Gradient.Direction.TOP_LEFT, ['#ff0000', '50%'], ['#0000ff', '10%'])
     * linear-gradient(to top left, ff0000 50%, 0000ff 10%)
     */
    static linear = (direction, ...stops) => new Method('linear-gradient')
        .required(any(direction, Unit.DEG))
        .required(...stops.map(stop => {
            if(Array.isArray(stop) && stop.length) {
                let res = stop[0];
                if(stop.length > 1) {
                    res += ' ' + any(stop[1], Unit.PX);
                }
                return res;
            }
        }))
        .build();

    /**
     * @example
     * Gradient.linear(Gradient.Direction.LEFT, '#ff0000', '#0000ff')
     * linear-gradient(to left, ff0000, 0000ff)
     * @example
     * Gradient.linear(Gradient.Direction.TOP_LEFT, ['#ff0000', '50%'], ['#0000ff', '10%'])
     * linear-gradient(to top left, ff0000 50%, 0000ff 10%)
     */
    static radial = (direction, ...stops) => new Method('linear-gradient')
        .required(any(direction, Unit.DEG))
        .required(...stops.map(stop => {
            if(Array.isArray(stop) && stop.length) {
                let res = stop[0];
                if(stop.length > 1) {
                    res += ' ' + any(stop[1], Unit.PX);
                }
                return res;
            }
        }))
        .build();

}
import {any, Method} from "utils";

export class BasicShape {

    static Radius = {
        CLOSEST_SIDE: 'closest-side',
        FARTHEST_SIDE: 'farthest-side'
    };

    /**
     * @example
     * BasicShape.inset([50,40,'20%',10], 15)
     * ellipse(50px 40px 20% 10px round 15px)
     */
    static inset = (args, borderRadius) => new Method('inset')
        .required(
            any(args, Unit.PERCENTAGE),
            any(borderRadius, Unit.PX))
        .build('round');

    /**
     * @example
     * BasicShape.circle([50,40])
     * ellipse(50px 40px)
     * @example
     * BasicShape.circle([50,40], ['20%',20])
     * ellipse(50px 40px at 20% 20px)
     * @example
     * BasicShape.circle([BasicShape.Radius.CLOSEST_SIDE, 20])
     * ellipse(closest-side 20px)
     */
    static circle = (radius, position) => new Method('circle')
        .required(any(radius, Unit.PX))
        .optional(any(position, Unit.PX))
        .build('at');

    /**
     * @example
     * BasicShape.ellipse([50,40])
     * ellipse(50px 40px)
     * @example
     * BasicShape.ellipse([50,40], ['20%',20])
     * ellipse(50px 40px at 20% 20px)
     * @example
     * BasicShape.ellipse([BasicShape.Radius.CLOSEST_SIDE, 20])
     * ellipse(closest-side 20px)
     */
    static ellipse = (radius, position) => new Method('ellipse')
        .required(any(radius, Unit.PX))
        .optional(any(position, Unit.PX))
        .build('at');

    static Polygon = {

        FillRule: {
            NONZERO: 'nonzero',
            EVENODD: 'evenodd'
        },

        /**
         * @example
         * BasicShape.Polygon.evenodd([0,0], [50,50], ['100%', 100])
         * polygon(nonzero, 0 0, 50px 50px, 100% 100px)
         */
        nonzero: (...args) => new Method('polygon')
            .required(BasicShape.Polygon.FillRule.NONZERO)
            .required(...args.map(arg => any(arg, Unit.PX)))
            .build(),

        /**
         * @example
         * BasicShape.Polygon.evenodd([0,0], [50,50], ['100%', 100])
         * polygon(evenodd, 0 0, 50px 50px, 100% 100px)
         */
        evenodd: (...args) => new Method('polygon')
            .required(BasicShape.Polygon.FillRule.EVENODD)
            .required(...args.map(arg => any(arg, Unit.PX)))
            .build(),

    };
}

import { any, Method } from 'utils';
import { Unit } from 'data-types/unit';

export class Transform {

    static matrix = (a, b, c, d, tx, ty) => new Method('matrix')
        .required(a, b, c, d, tx, ty)
        .build();

    static matrix3d = (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) => new Method('matrix')
        .required(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
        .build();

    static perspective = (distance) => new Method('perspective').required(any(distance, Unit.PX)).build();

    static rotate = (angle) => new Method('rotate').required(any(angle, Unit.DEG)).build();
    static rotate3d = (x, y, z, angle) => new Method('rotate3d').required(x, y, z, any(angle, Unit.DEG)).build();
    static rotateX = (angle) => new Method('rotateX').required(any(angle, Unit.DEG)).build();
    static rotateY = (angle) => new Method('rotateY').required(any(angle, Unit.DEG)).build();
    static rotateZ = (angle) => new Method('rotateZ').required(any(angle, Unit.DEG)).build();

    static scale = (sx, sy) => new Method('scale').required(sx).optional(sy).build();
    static scale3d = (sx, sy, sz) => new Method('scale3d').required(sx, sy, sz).build();
    static scaleX = (s) => new Method('scaleX').required(s).build();
    static scaleY = (s) => new Method('scaleY').required(s).build();
    static scaleZ = (s) => new Method('scaleZ').required(s).build();

    static skew = (angleX, angleY) => new Method('skew').required(any(angleX, Unit.DEG)).optional(any(angleY, Unit.DEG)).build();
    static skewX = (angle) => new Method('skewX').required(any(angle, Unit.DEG)).build();
    static skewY = (angle) => new Method('skewY').required(any(angle, Unit.DEG)).build();

    static translate = (tx, ty) => new Method('translate').required(any(tx, Unit.PX)).optional(any(ty, Unit.PX)).build();
    static translate3d = (tx, ty, tz) => new Method('translate3d').required(any(tx, Unit.PX), any(ty, Unit.PX), any(tz, Unit.PX)).build();
    static translateX = (t) => new Method('translateX').required(any(t, Unit.PX)).build();
    static translateY = (t) => new Method('translateY').required(any(t, Unit.PX)).build();
    static translateZ = (t) => new Method('translateZ').required(any(t, Unit.PX)).build();
}
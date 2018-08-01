import { any, clockwise } from 'utils';
import { Unit } from 'data-types';
import { css } from 'css';

export const Margin = (...values) => {
    const [m1, m2, m3, m4] = clockwise(...values);
    return css(
        MarginTop(m1),
        MarginRight(m2),
        MarginBottom(m3),
        MarginLeft(m4)
    );
};

export const MarginTop = (value) => ({marginTop: any(value, Unit.PX)});
export const MarginLeft = (value) => ({marginLeft: any(value, Unit.PX)});
export const MarginRight = (value) => ({marginRight: any(value, Unit.PX)});
export const MarginBottom = (value) => ({marginBottom: any(value, Unit.PX)});

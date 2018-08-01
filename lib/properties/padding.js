import { any, clockwise } from 'utils';
import { Unit } from 'data-types';
import { css } from 'css';

export const Padding = (...values) => {
    const [p1, p2, p3, p4] = clockwise(...values);
    return css(
        PaddingTop(p1),
        PaddingRight(p2),
        PaddingBottom(p3),
        PaddingLeft(p4)
    );
};
PaddingTop = (value) => ({paddingTop: any(value, Unit.PX)});
PaddingLeft = (value) => ({paddingLeft: any(value, Unit.PX)});
PaddingRight = (value) => ({paddingRight: any(value, Unit.PX)});
PaddingBottom = (value) => ({paddingBottom: any(value, Unit.PX)});

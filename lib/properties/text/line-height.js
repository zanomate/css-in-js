import { any } from 'utils';
import { Unit } from 'data-types';

export const LineHeight = (value) => ({lineHeight: any(value, Unit.PX)});

LineHeight.values = {
    NORMAL: 'normal'
};

LineHeight.NORMAL = LineHeight(LineHeight.values.NORMAL);

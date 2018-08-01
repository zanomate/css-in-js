import { any, space } from 'utils';
import { Unit } from 'data-types';

export const TextIndent = (value, ...options) => ({textIndent: space(any(value, Unit.PX), ...options)});
TextIndent.options = {
    HANGING: 'hanging',
    EACH_LINE: 'each-line'
};

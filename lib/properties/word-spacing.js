import { any } from 'utils';
import { Unit } from 'data-types';

export const WordSpacing = (value) => ({wordSpacing: any(value, Unit.PX)});
WordSpacing.values = {
    NORMAL: 'normal'
};
WordSpacing.NORMAL = WordSpacing(WordSpacing.values.NORMAL);

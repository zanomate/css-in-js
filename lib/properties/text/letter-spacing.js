import { any } from 'utils';
import { Unit } from 'data-types';

export const LetterSpacing = (value) => ({letterSpacing: any(value, Unit.PX)});

LetterSpacing.values = {
    NORMAL: 'normal'
};

LetterSpacing.NORMAL = LetterSpacing(LetterSpacing.values.NORMAL);

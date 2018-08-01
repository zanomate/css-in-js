import { any } from 'utils';
import { Unit } from 'data-types';

export const FlexBasis = (value) => ({flexBasis: any(value, Unit.PX)});
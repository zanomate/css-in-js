import { any } from 'utils';
import { Unit } from 'data-types';

export const AnimationDuration = (duration) => ({animationDuration: any(duration, Unit.S)});

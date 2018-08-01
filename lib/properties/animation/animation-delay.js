import { any } from 'utils';
import { Unit } from 'data-types';

export const AnimationDelay = (delay) => ({animationDelay: any(delay, Unit.S)});

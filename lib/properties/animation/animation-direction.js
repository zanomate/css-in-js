import { Animation } from 'properties';

export const AnimationDirection = (direction) => ({animationDirection: direction});
AnimationDirection.NORMAL = AnimationDirection(Animation.Direction.NORMAL);
AnimationDirection.REVERSE = AnimationDirection(Animation.Direction.REVERSE);
AnimationDirection.ALTERNATE = AnimationDirection(Animation.Direction.ALTERNATE);
AnimationDirection.ALTERNATE_REVERSE = (Animation.Direction.ALTERNATE_REVERSE);
AnimationDirection.UNSET = AnimationDirection(Animation.Direction.UNSET);

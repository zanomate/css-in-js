import { Animation } from 'properties';

export const AnimationFillMode = (fillMode) => ({animationFillMode: fillMode});
AnimationFillMode.NONE = AnimationFillMode(Animation.FillMode.NONE);
AnimationFillMode.FORWARDS = AnimationFillMode(Animation.FillMode.FORWARDS);
AnimationFillMode.BACKWARDS = AnimationFillMode(Animation.FillMode.BACKWARDS);
AnimationFillMode.BOTH = AnimationFillMode(Animation.FillMode.BOTH);

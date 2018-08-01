import { Animation } from 'properties';

export const AnimationPlayState = (playState) => ({animationPlayState: playState});
AnimationPlayState.RUNNING = AnimationPlayState(Animation.PlayState.RUNNING);
AnimationPlayState.PAUSED = AnimationPlayState(Animation.PlayState.PAUSED);
AnimationPlayState.UNSET = AnimationPlayState(Animation.PlayState.UNSET);

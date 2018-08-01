import { css } from 'css';
import {
    AnimationDelay,
    AnimationDirection,
    AnimationDuration,
    AnimationFillMode,
    AnimationIterationCount,
    AnimationName,
    AnimationPlayState,
    AnimationTimingFunction
} from 'properties';

export const Animation = (duration, timing, delay, iterationCount, direction, fillMode, playState, name) => css(
    AnimationDuration(duration),
    AnimationTimingFunction(timing),
    AnimationDelay(delay),
    AnimationIterationCount(iterationCount),
    AnimationDirection(direction),
    AnimationFillMode(fillMode),
    AnimationPlayState(playState),
    AnimationName(name)
);

Animation.Direction = {
    NORMAL: 'normal',
    REVERSE: 'reverse',
    ALTERNATE: 'alternate',
    ALTERNATE_REVERSE: 'alternate-reverse',
    UNSET: 'unset'
};

Animation.FillMode = {
    NONE: 'none',
    FORWARDS: 'forwards',
    BACKWARDS: 'backwards',
    BOTH: 'both'
};

Animation.PlayState = {
    RUNNING: 'running',
    PAUSED: 'paused',
    UNSET: 'unset'
};

Animation.Loop = (duration, timing, delay, direction, fillMode, name) => css(
    AnimationDuration(duration),
    AnimationTimingFunction(timing),
    AnimationDelay(delay),
    AnimationDirection(direction),
    AnimationFillMode(fillMode),
    AnimationName(name)
);

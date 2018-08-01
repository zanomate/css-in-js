import { Method } from 'utils';

export class Timing {

    static cubicBezier = (x1, y1, x2, y2) => new Method('cubic-bezier').required(x1, y1, x2, y2).build();

    static StepsDirection = {
        START: 'start',
        END: 'end'
    };
    static steps = (numberOfSteps, direction) => new Method('steps').required(numberOfSteps).optional(direction).build();
    static stepsStart = (numberOfSteps) => Timing.steps(numberOfSteps, Timing.StepsDirection.START);
    static stepsEnd = (numberOfSteps) => Timing.steps(numberOfSteps, Timing.StepsDirection.END);

    static frames = (numberOfFrames) => new Method('frames').required(numberOfFrames).build();

    static linear = 'linear';
    static ease = 'ease';
    static easeIn = 'ease-in';
    static easeOut = 'ease-out';
    static easeInOut = 'ease-in-out';
    static stepStart = 'step-start';
    static stepEnd = 'step-end';

}
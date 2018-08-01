import { withUnit } from 'utils';

export class Unit {
    static NONE = '';
    // Angle
    static DEG = 'deg';
    static GRAD = 'grad';
    static RAD = 'rad';
    static TURN = 'turn';
    // Flex
    static FR = 'fr';
    // Frequency
    static HZ = 'Hz';
    static KHZ = 'kHz';
    // Length
    static CAP = 'cap';
    static CH = 'ch';
    static EM = 'em';
    static EX = 'ex';
    static IC = 'ic';
    static LH = 'lh';
    static REM = 'rem';
    static RLH = 'rlh';
    static VH = 'vh';
    static VW = 'vw';
    static VI = 'vi';
    static VB = 'vb';
    static VMIN = 'vmin';
    static VMAX = 'vmax';
    static PX = 'px';
    static CM = 'cm';
    static MM = 'mm';
    static Q = 'Q';
    static IN = 'in';
    static PC = 'pc';
    static PT = 'pt';
    static PERCENTAGE = '%';
    // Resolution
    static DPI = 'dpi';
    static DPCM = 'dpcm';
    static DPPX = 'dppx';
    static X = 'x';
    // Time
    static S = 's';
    static MS = 'ms';
}

// Angle
export const deg = (value) => withUnit(value, Unit.DEG);
export const grad = (value) => withUnit(value, Unit.GRAD);
export const rad = (value) => withUnit(value, Unit.RAD);
export const turn = (value) => withUnit(value, Unit.TURN);

//Flex
export const fr = (value) => withUnit(value, Unit.FR);

//Frequency
export const Hz = (value) => withUnit(value, Unit.HZ);
export const kHz = (value) => withUnit(value, Unit.KHZ);

// Length
// Relative
export const cap = (value) => withUnit(value, Unit.CAP);
export const ch = (value) => withUnit(value, Unit.CH);
export const em = (value) => withUnit(value, Unit.EM);
export const ex = (value) => withUnit(value, Unit.EX);
export const ic = (value) => withUnit(value, Unit.IC);
export const lh = (value) => withUnit(value, Unit.LH);
export const rem = (value) => withUnit(value, Unit.REM);
export const rlh = (value) => withUnit(value, Unit.RLH);
export const vh = (value) => withUnit(value, Unit.VH);
export const vw = (value) => withUnit(value, Unit.VW);
export const vi = (value) => withUnit(value, Unit.VI);
export const vb = (value) => withUnit(value, Unit.VB);
export const vmin = (value) => withUnit(value, Unit.VMIN);
export const vmax = (value) => withUnit(value, Unit.VMAX);
// Absolute
export const px = (value) => withUnit(value, Unit.PX);
export const cm = (value) => withUnit(value, Unit.CM);
export const mm = (value) => withUnit(value, Unit.MM);
export const quarter = (value) => withUnit(value, Unit.Q);
export const inch = (value) => withUnit(value, Unit.IN);
export const pc = (value) => withUnit(value, Unit.PC);
export const pt = (value) => withUnit(value, Unit.PT);
// Percentage
export const percent = (value) => withUnit(value, Unit.PERCENTAGE);

// Resolution
export const dpi = (value) => withUnit(value, Unit.DPI);
export const dpcm = (value) => withUnit(value, Unit.DPCM);
export const dppx = (value) => withUnit(value, Unit.DPPX);
export const x = (value) => withUnit(value, Unit.X);

// Time
export const s = (value) => withUnit(value, Unit.S);
export const ms = (value) => withUnit(value, Unit.MS);
import {unit} from "utils/generic";
import {Units} from "consants";

/* Relative Units */

export const cap = (value) => unit(value, Units.CAP);
export const ch = (value) => unit(value, Units.CH);
export const em = (value) => unit(value, Units.EM);
export const ex = (value) => unit(value, Units.EX);
export const ic = (value) => unit(value, Units.IC);
export const lh = (value) => unit(value, Units.LH);
export const rem = (value) => unit(value, Units.REM);
export const rlh = (value) => unit(value, Units.RLH);
export const vh = (value) => unit(value, Units.VH);
export const vw = (value) => unit(value, Units.VW);
export const vi = (value) => unit(value, Units.VI);
export const vb = (value) => unit(value, Units.VB);
export const vmin = (value) => unit(value, Units.VMIN);
export const vmax = (value) => unit(value, Units.VMAX);

/* Absolute Units */

export const px = (value) => unit(value, Units.PX);
export const cm = (value) => unit(value, Units.CM);
export const mm = (value) => unit(value, Units.MM);
export const quarter = (value) => unit(value, Units.Q);
export const inch = (value) => unit(value, Units.IN);
export const pc = (value) => unit(value, Units.PC);
export const pt = (value) => unit(value, Units.PT);

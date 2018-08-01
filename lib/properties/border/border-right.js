import { Unit } from 'data-types';
import { css } from 'css';
import { any } from 'utils';
import { Border } from 'properties';

export const BorderRight = (width, style, color) => css(
    BorderRightWidth(width),
    BorderRightStyle(style),
    BorderRightColor(color)
);
BorderRight.Hidden = (width, color) => BorderRight(width, Border.Style.HIDDEN, color);
BorderRight.Dotted = (width, color) => BorderRight(width, Border.Style.DOTTED, color);
BorderRight.Dashed = (width, color) => BorderRight(width, Border.Style.DASHED, color);
BorderRight.Solid = (width, color) => BorderRight(width, Border.Style.SOLID, color);
BorderRight.Double = (width, color) => BorderRight(width, Border.Style.DOUBLE, color);
BorderRight.Groove = (width, color) => BorderRight(width, Border.Style.GROOVE, color);
BorderRight.Ridge = (width, color) => BorderRight(width, Border.Style.RIDGE, color);
BorderRight.Inset = (width, color) => BorderRight(width, Border.Style.INSET, color);
BorderRight.Outset = (width, color) => BorderRight(width, Border.Style.OUTSET, color);

export const BorderRightWidth = (width) => ({borderRightWidth: any(width, Unit.PX)});
BorderRightWidth.THIN = BorderRightWidth(Border.Width.THIN);
BorderRightWidth.MEDIUM = BorderRightWidth(Border.Width.MEDIUM);
BorderRightWidth.THICK = BorderRightWidth(Border.Width.THICK);

export const BorderRightStyle = (style) => ({borderRightStyle: style});
BorderRightStyle.NONE = BorderRightStyle(Border.Style.NONE);
BorderRightStyle.HIDDEN = BorderRightStyle(Border.Style.HIDDEN);
BorderRightStyle.DOTTED = BorderRightStyle(Border.Style.DOTTED);
BorderRightStyle.DASHED = BorderRightStyle(Border.Style.DASHED);
BorderRightStyle.SOLID = BorderRightStyle(Border.Style.SOLID);
BorderRightStyle.DOUBLE = BorderRightStyle(Border.Style.DOUBLE);
BorderRightStyle.GROOVE = BorderRightStyle(Border.Style.GROOVE);
BorderRightStyle.RIDGE = BorderRightStyle(Border.Style.RIDGE);
BorderRightStyle.INSET = BorderRightStyle(Border.Style.INSET);
BorderRightStyle.OUTSET = BorderRightStyle(Border.Style.OUTSET);

export const BorderRightColor = (color) => ({borderRightColor: color});

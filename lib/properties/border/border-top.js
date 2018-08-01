import { Unit } from 'data-types';
import { css } from 'css';
import { any, space } from 'utils';
import { Border } from 'properties';

export const BorderTop = (width, style, color) => css(
    BorderTopWidth(width),
    BorderTopStyle(style),
    BorderTopColor(color)
);
BorderTop.Hidden = (width, color) => BorderTop(width, Border.Style.HIDDEN, color);
BorderTop.Dotted = (width, color) => BorderTop(width, Border.Style.DOTTED, color);
BorderTop.Dashed = (width, color) => BorderTop(width, Border.Style.DASHED, color);
BorderTop.Solid = (width, color) => BorderTop(width, Border.Style.SOLID, color);
BorderTop.Double = (width, color) => BorderTop(width, Border.Style.DOUBLE, color);
BorderTop.Groove = (width, color) => BorderTop(width, Border.Style.GROOVE, color);
BorderTop.Ridge = (width, color) => BorderTop(width, Border.Style.RIDGE, color);
BorderTop.Inset = (width, color) => BorderTop(width, Border.Style.INSET, color);
BorderTop.Outset = (width, color) => BorderTop(width, Border.Style.OUTSET, color);

export const BorderTopWidth = (width) => ({borderTopWidth: any(width, Unit.PX)});
BorderTopWidth.THIN = BorderTopWidth(Border.Width.THIN);
BorderTopWidth.MEDIUM = BorderTopWidth(Border.Width.MEDIUM);
BorderTopWidth.THICK = BorderTopWidth(Border.Width.THICK);

export const BorderTopStyle = (style) => ({borderTopStyle: style});
BorderTopStyle.NONE = BorderTopStyle(Border.Style.NONE);
BorderTopStyle.HIDDEN = BorderTopStyle(Border.Style.HIDDEN);
BorderTopStyle.DOTTED = BorderTopStyle(Border.Style.DOTTED);
BorderTopStyle.DASHED = BorderTopStyle(Border.Style.DASHED);
BorderTopStyle.SOLID = BorderTopStyle(Border.Style.SOLID);
BorderTopStyle.DOUBLE = BorderTopStyle(Border.Style.DOUBLE);
BorderTopStyle.GROOVE = BorderTopStyle(Border.Style.GROOVE);
BorderTopStyle.RIDGE = BorderTopStyle(Border.Style.RIDGE);
BorderTopStyle.INSET = BorderTopStyle(Border.Style.INSET);
BorderTopStyle.OUTSET = BorderTopStyle(Border.Style.OUTSET);

export const BorderTopColor = (color) => ({borderTopColor: color});

export const BorderTopLeftRadius = (radH, radV) => ({borderTopLeftRadius: space(radH, radV)});

export const BorderTopRightRadius = (radH, radV) => ({borderTopRightRadius: space(radH, radV)});

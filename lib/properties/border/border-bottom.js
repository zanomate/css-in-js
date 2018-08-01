import { Unit } from 'data-types';
import { css } from 'css';
import { any, space } from 'utils';
import { Border } from 'properties';

export const BorderBottom = (width, style, color) => css(
    BorderBottomWidth(width),
    BorderBottomStyle(style),
    BorderBottomColor(color)
);
BorderBottom.Hidden = (width, color) => BorderBottom(width, Border.Style.HIDDEN, color);
BorderBottom.Dotted = (width, color) => BorderBottom(width, Border.Style.DOTTED, color);
BorderBottom.Dashed = (width, color) => BorderBottom(width, Border.Style.DASHED, color);
BorderBottom.Solid = (width, color) => BorderBottom(width, Border.Style.SOLID, color);
BorderBottom.Double = (width, color) => BorderBottom(width, Border.Style.DOUBLE, color);
BorderBottom.Groove = (width, color) => BorderBottom(width, Border.Style.GROOVE, color);
BorderBottom.Ridge = (width, color) => BorderBottom(width, Border.Style.RIDGE, color);
BorderBottom.Inset = (width, color) => BorderBottom(width, Border.Style.INSET, color);
BorderBottom.Outset = (width, color) => BorderBottom(width, Border.Style.OUTSET, color);

export const BorderBottomWidth = (width) => ({borderBottomWidth: any(width, Unit.PX)});
BorderBottomWidth.THIN = BorderBottomWidth(Border.Width.THIN);
BorderBottomWidth.MEDIUM = BorderBottomWidth(Border.Width.MEDIUM);
BorderBottomWidth.THICK = BorderBottomWidth(Border.Width.THICK);

export const BorderBottomStyle = (style) => ({borderBottomStyle: style});
BorderBottomStyle.NONE = BorderBottomStyle(Border.Style.NONE);
BorderBottomStyle.HIDDEN = BorderBottomStyle(Border.Style.HIDDEN);
BorderBottomStyle.DOTTED = BorderBottomStyle(Border.Style.DOTTED);
BorderBottomStyle.DASHED = BorderBottomStyle(Border.Style.DASHED);
BorderBottomStyle.SOLID = BorderBottomStyle(Border.Style.SOLID);
BorderBottomStyle.DOUBLE = BorderBottomStyle(Border.Style.DOUBLE);
BorderBottomStyle.GROOVE = BorderBottomStyle(Border.Style.GROOVE);
BorderBottomStyle.RIDGE = BorderBottomStyle(Border.Style.RIDGE);
BorderBottomStyle.INSET = BorderBottomStyle(Border.Style.INSET);
BorderBottomStyle.OUTSET = BorderBottomStyle(Border.Style.OUTSET);

export const BorderBottomColor = (color) => ({borderBottomColor: color});

export const BorderBottomLeftRadius = (radH, radV) => ({borderBottomLeftRadius: space(radH, radV)});

export const BorderBottomRightRadius = (radH, radV) => ({borderBottomRightRadius: space(radH, radV)});

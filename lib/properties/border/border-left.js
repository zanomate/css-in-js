import { Unit } from 'data-types';
import { css } from 'css';
import { any } from 'utils';
import { Border } from 'properties';

export const BorderLeft = (width, style, color) => css(
    BorderLeftWidth(width),
    BorderLeftStyle(style),
    BorderLeftColor(color)
);
BorderLeft.Hidden = (width, color) => BorderLeft(width, Border.Style.HIDDEN, color);
BorderLeft.Dotted = (width, color) => BorderLeft(width, Border.Style.DOTTED, color);
BorderLeft.Dashed = (width, color) => BorderLeft(width, Border.Style.DASHED, color);
BorderLeft.Solid = (width, color) => BorderLeft(width, Border.Style.SOLID, color);
BorderLeft.Double = (width, color) => BorderLeft(width, Border.Style.DOUBLE, color);
BorderLeft.Groove = (width, color) => BorderLeft(width, Border.Style.GROOVE, color);
BorderLeft.Ridge = (width, color) => BorderLeft(width, Border.Style.RIDGE, color);
BorderLeft.Inset = (width, color) => BorderLeft(width, Border.Style.INSET, color);
BorderLeft.Outset = (width, color) => BorderLeft(width, Border.Style.OUTSET, color);

export const BorderLeftWidth = (width) => ({borderLeftWidth: any(width, Unit.PX)});
BorderLeftWidth.THIN = BorderLeftWidth(Border.Width.THIN);
BorderLeftWidth.MEDIUM = BorderLeftWidth(Border.Width.MEDIUM);
BorderLeftWidth.THICK = BorderLeftWidth(Border.Width.THICK);

export const BorderLeftStyle = (style) => ({borderLeftStyle: style});
BorderLeftStyle.NONE = BorderLeftStyle(Border.Style.NONE);
BorderLeftStyle.HIDDEN = BorderLeftStyle(Border.Style.HIDDEN);
BorderLeftStyle.DOTTED = BorderLeftStyle(Border.Style.DOTTED);
BorderLeftStyle.DASHED = BorderLeftStyle(Border.Style.DASHED);
BorderLeftStyle.SOLID = BorderLeftStyle(Border.Style.SOLID);
BorderLeftStyle.DOUBLE = BorderLeftStyle(Border.Style.DOUBLE);
BorderLeftStyle.GROOVE = BorderLeftStyle(Border.Style.GROOVE);
BorderLeftStyle.RIDGE = BorderLeftStyle(Border.Style.RIDGE);
BorderLeftStyle.INSET = BorderLeftStyle(Border.Style.INSET);
BorderLeftStyle.OUTSET = BorderLeftStyle(Border.Style.OUTSET);

export const BorderLeftColor = (color) => ({borderLeftColor: color});

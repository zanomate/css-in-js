import { css } from 'css';
import { BorderColor, BorderStyle, BorderWidth } from 'properties';

export const Border = (width, style, color) => css(
    BorderWidth(...width),
    BorderStyle(...style),
    BorderColor(...color)
);

Border.Width = {
    THIN: 'thin',
    MEDIUM: 'medium',
    THICK: 'thick'
};

Border.Style = {
    NONE: 'none',
    HIDDEN: 'hidden',
    DOTTED: 'dotted',
    DASHED: 'dashed',
    SOLID: 'solid',
    DOUBLE: 'double',
    GROOVE: 'groove',
    RIDGE: 'ridge',
    INSET: 'inset',
    OUTSET: 'outset'
};

Border.Hidden = (width, color) => Border(width, Border.Style.HIDDEN, color);
Border.Dotted = (width, color) => Border(width, Border.Style.DOTTED, color);
Border.Dashed = (width, color) => Border(width, Border.Style.DASHED, color);
Border.Solid = (width, color) => Border(width, Border.Style.SOLID, color);
Border.Double = (width, color) => Border(width, Border.Style.DOUBLE, color);
Border.Groove = (width, color) => Border(width, Border.Style.GROOVE, color);
Border.Ridge = (width, color) => Border(width, Border.Style.RIDGE, color);
Border.Inset = (width, color) => Border(width, Border.Style.INSET, color);
Border.Outset = (width, color) => Border(width, Border.Style.OUTSET, color);

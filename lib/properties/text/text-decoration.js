import { css } from 'css';
import { Colors } from 'data-types/index';
import { space } from 'utils/index';

export const TextDecoration = (line, style, color) => css(
    TextDecorationLine(...line),
    TextDecorationStyle(style),
    TextDecorationColor(color)
);
TextDecoration.Line = {
    NONE: 'none',
    UNDERLINE: 'underline',
    OVERLINE: 'overline',
    LINE_THROUGH: 'line-through',
    BLINK: 'blink'
};
TextDecoration.Style = {
    SOLID: 'solid',
    DOUBLE: 'double',
    DOTTED: 'dotted',
    DASHED: 'dashed',
    WAVY: 'wavy'
};

export const TextDecorationLine = (...values) => ({textDecorationLine: space(...values)});
TextDecorationLine.values = TextDecoration.Line;
TextDecorationLine.NONE = TextDecorationLine(TextDecorationLine.values.NONE);
TextDecorationLine.UNDERLINE = TextDecorationLine(TextDecorationLine.values.UNDERLINE);
TextDecorationLine.OVERLINE = TextDecorationLine(TextDecorationLine.values.OVERLINE);
TextDecorationLine.LINE_THROUGH = TextDecorationLine(TextDecorationLine.values.LINE_THROUGH);
TextDecorationLine.BLINK = TextDecorationLine(TextDecorationLine.values.BLINK);

export const TextDecorationStyle = (value) => ({textDecorationLine: value});
TextDecorationStyle.values = TextDecoration.Style;
TextDecorationStyle.SOLID = TextDecorationStyle(TextDecorationStyle.values.SOLID);
TextDecorationStyle.DOUBLE = TextDecorationStyle(TextDecorationStyle.values.DOUBLE);
TextDecorationStyle.DOTTED = TextDecorationStyle(TextDecorationStyle.values.DOTTED);
TextDecorationStyle.DASHED = TextDecorationStyle(TextDecorationStyle.values.DASHED);
TextDecorationStyle.WAVY = TextDecorationStyle(TextDecorationStyle.values.WAVY);

export const TextDecorationColor = (value) => ({textDecorationColor: value});
TextDecorationColor.TRANSPARENT = TextDecorationColor(Colors.TRANSPARENT);
TextDecorationColor.CURRENT_COLOR = TextDecorationColor(Colors.CURRENT_COLOR);

import { css } from 'css';
import { Border, BorderBottomStyle, BorderLeftStyle, BorderRightStyle, BorderTopStyle } from 'properties';

export const BorderStyle = (s1, s2, s3, s4) => {
    if (s4) {
        return css(
            BorderTopStyle(s1),
            BorderRightStyle(s2),
            BorderBottomStyle(s3),
            BorderLeftStyle(s4)
        );
    }
    if (s3) {
        return css(
            BorderTopStyle(s1),
            BorderRightStyle(s2),
            BorderBottomStyle(s3),
            BorderLeftStyle(s2)
        );
    }
    if (s2) {
        return css(
            BorderTopStyle(s1),
            BorderRightStyle(s2),
            BorderBottomStyle(s1),
            BorderLeftStyle(s2)
        );
    }
    if (s1) {
        return css(
            BorderTopStyle(s1),
            BorderRightStyle(s1),
            BorderBottomStyle(s1),
            BorderLeftStyle(s1)
        );
    }
    return {};
};
BorderStyle.NONE = BorderStyle(Border.Style.NONE);
BorderStyle.HIDDEN = BorderStyle(Border.Style.HIDDEN);
BorderStyle.DOTTED = BorderStyle(Border.Style.DOTTED);
BorderStyle.DASHED = BorderStyle(Border.Style.DASHED);
BorderStyle.SOLID = BorderStyle(Border.Style.SOLID);
BorderStyle.DOUBLE = BorderStyle(Border.Style.DOUBLE);
BorderStyle.GROOVE = BorderStyle(Border.Style.GROOVE);
BorderStyle.RIDGE = BorderStyle(Border.Style.RIDGE);
BorderStyle.INSET = BorderStyle(Border.Style.INSET);
BorderStyle.OUTSET = BorderStyle(Border.Style.OUTSET);

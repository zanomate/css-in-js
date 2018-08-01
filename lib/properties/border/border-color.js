import { css } from 'css';
import { BorderBottomColor, BorderLeftColor, BorderRightColor, BorderTopColor } from 'properties';

export const BorderColor = (c1, c2, c3, c4) => {
    if (c4) {
        return css(
            BorderTopColor(c1),
            BorderLeftColor(c2),
            BorderRightColor(c3),
            BorderBottomColor(c4)
        );
    }
    if (c3) {
        return css(
            BorderTopColor(c1),
            BorderLeftColor(c2),
            BorderRightColor(c3),
            BorderBottomColor(c2)
        );
    }
    if (c2) {
        return css(
            BorderTopColor(c1),
            BorderLeftColor(c2),
            BorderRightColor(c1),
            BorderBottomColor(c2)
        );
    }
    if (c1) {
        return css(
            BorderTopColor(c1),
            BorderLeftColor(c1),
            BorderRightColor(c1),
            BorderBottomColor(c1)
        );
    }
    return {};
};

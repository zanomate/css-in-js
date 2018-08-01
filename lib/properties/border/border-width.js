import { css } from 'css';
import { Border, BorderBottomWidth, BorderLeftWidth, BorderRightWidth, BorderTopWidth } from 'properties';

export const BorderWidth = (w1, w2, w3, w4) => {
    if (w4) {
        return css(
            BorderTopWidth(w1),
            BorderRightWidth(w2),
            BorderBottomWidth(w3),
            BorderLeftWidth(w4)
        );
    }
    if (w3) {
        return css(
            BorderTopWidth(w1),
            BorderRightWidth(w2),
            BorderBottomWidth(w3),
            BorderLeftWidth(w2)
        );
    }
    if (w2) {
        return css(
            BorderTopWidth(w1),
            BorderRightWidth(w2),
            BorderBottomWidth(w1),
            BorderLeftWidth(w2)
        );
    }
    if (w1) {
        return css(
            BorderTopWidth(w1),
            BorderRightWidth(w1),
            BorderBottomWidth(w1),
            BorderLeftWidth(w1)
        );
    }
    return {};
};
BorderWidth.THIN = BorderWidth(Border.Width.THIN);
BorderWidth.MEDIUM = BorderWidth(Border.Width.MEDIUM);
BorderWidth.THICK = BorderWidth(Border.Width.THICK);

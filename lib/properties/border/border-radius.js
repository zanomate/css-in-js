import { css } from 'css';
import { BorderBottomLeftRadius, BorderBottomRightRadius, BorderTopLeftRadius, BorderTopRightRadius } from 'properties';

export const BorderRadius = (rH, rV) => {
    let radius = {
        topLeft: [],
        topRight: [],
        bottomRight: [],
        bottomLeft: []
    };
    if (Array.isArray(rH)) {
        if (rH.length === 1) {
            radius.topLeft.push(rH[0]);
            radius.topRight.push(rH[0]);
            radius.bottomRight.push(rH[0]);
            radius.bottomLeft.push(rH[0]);
        }
        else if (rH.length === 2) {
            radius.topLeft.push(rH[0]);
            radius.topRight.push(rH[1]);
            radius.bottomRight.push(rH[0]);
            radius.bottomLeft.push(rH[1]);
        }
        else if (rH.length === 3) {
            radius.topLeft.push(rH[0]);
            radius.topRight.push(rH[1]);
            radius.bottomRight.push(rH[2]);
            radius.bottomLeft.push(rH[1]);
        }
        else if (rH.length === 4) {
            radius.topLeft.push(rH[0]);
            radius.topRight.push(rH[1]);
            radius.bottomRight.push(rH[2]);
            radius.bottomLeft.push(rH[3]);
        }
        else {
            return {};
        }
    }
    else {
        radius.topLeft.push(rH);
        radius.topRight.push(rH);
        radius.bottomRight.push(rH);
        radius.bottomLeft.push(rH);
    }

    if (rV) {
        if (Array.isArray(rV)) {
            if (rV.length === 1) {
                radius.topLeft.push(rV[0]);
                radius.topRight.push(rV[0]);
                radius.bottomRight.push(rV[0]);
                radius.bottomLeft.push(rV[0]);
            }
            else if (rV.length === 2) {
                radius.topLeft.push(rV[0]);
                radius.topRight.push(rV[1]);
                radius.bottomRight.push(rV[0]);
                radius.bottomLeft.push(rV[1]);
            }
            else if (rV.length === 3) {
                radius.topLeft.push(rV[0]);
                radius.topRight.push(rV[1]);
                radius.bottomRight.push(rV[2]);
                radius.bottomLeft.push(rV[1]);
            }
            else if (rV.length === 4) {
                radius.topLeft.push(rV[0]);
                radius.topRight.push(rV[1]);
                radius.bottomRight.push(rV[2]);
                radius.bottomLeft.push(rV[3]);
            }
            else {
                return {};
            }
        }
        else {
            radius.topLeft.push(rV);
            radius.topRight.push(rV);
            radius.bottomRight.push(rV);
            radius.bottomLeft.push(rV);
        }
    }
    return css(
        BorderTopLeftRadius(...radius.topLeft),
        BorderTopRightRadius(...radius.topRight),
        BorderBottomRightRadius(...radius.bottomRight),
        BorderBottomLeftRadius(...radius.bottomLeft)
    );
};

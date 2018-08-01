import { Value } from 'common';
import { space } from 'utils';
import { css } from 'css';

export const BorderImage = (source, slice, width, outset, repeat) => css(
    BorderImageSource(source),
    BorderImageSlice(...slice),
    BorderImageWidth(...width),
    BorderImageOutset(...outset),
    BorderImageRepeat(...repeat)
);
BorderImage.Slice = {
    FILL: 'fill'
};
BorderImage.Repeat = {
    STRETCH: 'stretch',
    REPEAT: 'repeat',
    ROUND: 'round',
    SPACE: 'space'
};

export const BorderImageSource = (image) => ({borderImageSource: image});
BorderImageSource.NONE = BorderImageSource(Value.NONE);

export const BorderImageSlice = (v1, v2, v3, v4) => ({borderImageSlice: space(v1, v2, v3, v4)});

export const BorderImageWidth = (v1, v2, v3, v4) => ({borderImageWidth: space(v1, v2, v3, v4)});

export const BorderImageOutset = (v1, v2, v3, v4) => ({borderImageOutset: space(v1, v2, v3, v4)});

export const BorderImageRepeat = (v1, v2) => ({borderImageRepeat: space(v1, v2)});

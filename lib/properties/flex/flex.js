import { css } from 'css';
import { FlexBasis, FlexGrow, FlexShrink } from 'properties';

export const Flex = (grow, shrink, basis) => css(FlexGrow(grow), FlexShrink(shrink), FlexBasis(basis));

Flex.NORMAL = 'normal';
Flex.BASELINE = 'baseline';
Flex.FIRST_BASELINE = 'first baseline';
Flex.LAST_BASELINE = 'last baseline';
Flex.SPACE_BETWEEN = 'space-between';
Flex.SPACE_AROUND = 'space-around';
Flex.SPACE_EVENLY = 'space-evenly';
Flex.STRETCH = 'stretch';
Flex.CENTER = 'center';
Flex.START = 'start';
Flex.END = 'end';
Flex.FLEX_START = 'flex-start';
Flex.FLEX_END = 'flex-end';
Flex.SELF_START = 'flex-start';
Flex.SELF_END = 'flex-end';

Flex.SAFE = 'safe';
Flex.UNSAFE = 'unsafe';

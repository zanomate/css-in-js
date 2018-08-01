import { css } from 'css';
import { FlexDirection } from 'properties/flex';
import { FlexWrap } from 'properties/Flex';

export const FlexFlow = (direction, wrap) => css(FlexDirection(direction), FlexWrap(wrap));

import { Flex } from 'properties';
import { space } from 'utils';

export const JustifyContent = (value) => JustifyContent(value);

JustifyContent.NORMAL = JustifyContent(Flex.NORMAL);
JustifyContent.SPACE_BETWEEN = JustifyContent(Flex.SPACE_BETWEEN);
JustifyContent.SPACE_AROUND = JustifyContent(Flex.SPACE_AROUND);
JustifyContent.SPACE_EVENLY = JustifyContent(Flex.SPACE_EVENLY);
JustifyContent.STRETCH = JustifyContent(Flex.STRETCH);
JustifyContent.CENTER = JustifyContent(Flex.CENTER);
JustifyContent.START = JustifyContent(Flex.START);
JustifyContent.END = JustifyContent(Flex.END);
JustifyContent.FLEX_START = JustifyContent(Flex.FLEX_START);
JustifyContent.FLEX_END = JustifyContent(Flex.FLEX_END);
JustifyContent.LEFT = JustifyContent(Flex.LEFT);
JustifyContent.RIGHT = JustifyContent(Flex.RIGHT);

JustifyContent.SAFE = (value) => JustifyContent(space(JustifyContent.overflow.SAFE, value));
JustifyContent.SAFE.CENTER = JustifyContent(Flex.CENTER);
JustifyContent.SAFE.START = JustifyContent(Flex.START);
JustifyContent.SAFE.END = JustifyContent(Flex.END);
JustifyContent.SAFE.FLEX_START = JustifyContent(Flex.FLEX_START);
JustifyContent.SAFE.FLEX_END = JustifyContent(Flex.FLEX_END);

JustifyContent.UNSAFE = (value) => JustifyContent(space(JustifyContent.overflow.UNSAFE, value));
JustifyContent.UNSAFE.CENTER = JustifyContent(Flex.CENTER);
JustifyContent.UNSAFE.START = JustifyContent(Flex.START);
JustifyContent.UNSAFE.END = JustifyContent(Flex.END);
JustifyContent.UNSAFE.FLEX_START = JustifyContent(Flex.FLEX_START);
JustifyContent.UNSAFE.FLEX_END = JustifyContent(Flex.FLEX_END);

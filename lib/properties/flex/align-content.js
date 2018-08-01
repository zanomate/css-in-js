import { Flex } from 'properties';
import { space } from 'utils';

export const AlignContent = (value) => ({alignContent: value});

AlignContent.NORMAL = AlignContent(Flex.NORMAL);
AlignContent.CENTER = AlignContent(Flex.CENTER);
AlignContent.START = AlignContent(Flex.START);
AlignContent.END = AlignContent(Flex.END);
AlignContent.FLEX_START = AlignContent(Flex.FLEX_START);
AlignContent.FLEX_END = AlignContent(Flex.FLEX_END);
AlignContent.BASELINE = AlignContent(Flex.BASELINE);
AlignContent.FIRST_BASELINE = AlignContent(Flex.FIRST_BASELINE);
AlignContent.LAST_BASELINE = AlignContent(Flex.LAST_BASELINE);
AlignContent.SPACE_BETWEEN = AlignContent(Flex.SPACE_BETWEEN);
AlignContent.SPACE_AROUND = AlignContent(Flex.SPACE_AROUND);
AlignContent.SPACE_EVENLY = AlignContent(Flex.SPACE_EVENLY);
AlignContent.STRETCH = AlignContent(Flex.STRETCH);

AlignContent.SAFE = (value) => AlignContent(space(Flex.SAFE, value));
AlignContent.SAFE.CENTER = AlignContent.SAFE(Flex.CENTER);
AlignContent.SAFE.START = AlignContent.SAFE(Flex.START);
AlignContent.SAFE.END = AlignContent.SAFE(Flex.END);
AlignContent.SAFE.FLEX_START = AlignContent.SAFE(Flex.FLEX_START);
AlignContent.SAFE.FLEX_END = AlignContent.SAFE(Flex.FLEX_END);

AlignContent.UNSAFE = (value) => AlignContent(space(Flex.UNSAFE, value));
AlignContent.UNSAFE.CENTER = AlignContent.UNSAFE(Flex.CENTER);
AlignContent.UNSAFE.START = AlignContent.UNSAFE(Flex.START);
AlignContent.UNSAFE.END = AlignContent.UNSAFE(Flex.END);
AlignContent.UNSAFE.FLEX_START = AlignContent.UNSAFE(Flex.FLEX_START);
AlignContent.UNSAFE.FLEX_END = AlignContent.UNSAFE(Flex.FLEX_END);

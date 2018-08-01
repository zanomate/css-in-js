import { Flex } from 'properties';
import { space } from 'utils';

export const AlignItems = (value) => ({alignItems: value});

AlignItems.NORMAL = AlignItems(Flex.NORMAL);
AlignItems.STRETCH = AlignItems(Flex.STRETCH);
AlignItems.BASELINE = AlignItems(Flex.BASELINE);
AlignItems.FIRST_BASELINE = AlignItems(Flex.FIRST_BASELINE);
AlignItems.LAST_BASELINE = AlignItems(Flex.LAST_BASELINE);

AlignItems.CENTER = AlignItems(Flex.CENTER);
AlignItems.START = AlignItems(Flex.START);
AlignItems.END = AlignItems(Flex.END);
AlignItems.FLEX_START = AlignItems(Flex.FLEX_START);
AlignItems.FLEX_END = AlignItems(Flex.FLEX_END);
AlignItems.SELF_START = AlignItems(Flex.SELF_START);
AlignItems.SELF_END = AlignItems(Flex.SELF_END);

AlignItems.SAFE = (value) => AlignItems(space(Flex.SAFE, value));
AlignItems.SAFE.CENTER = AlignItems.SAFE(Flex.CENTER);
AlignItems.SAFE.START = AlignItems.SAFE(Flex.START);
AlignItems.SAFE.END = AlignItems.SAFE(Flex.END);
AlignItems.SAFE.FLEX_START = AlignItems.SAFE(Flex.FLEX_START);
AlignItems.SAFE.FLEX_END = AlignItems.SAFE(Flex.FLEX_END);
AlignItems.SAFE.SELF_START = AlignItems.SAFE(Flex.SELF_START);
AlignItems.SAFE.SELF_END = AlignItems.SAFE(Flex.SELF_END);

AlignItems.UNSAFE = (value) => AlignItems(space(Flex.UNSAFE, value));
AlignItems.UNSAFE.CENTER = AlignItems.UNSAFE(Flex.CENTER);
AlignItems.UNSAFE.START = AlignItems.UNSAFE(Flex.START);
AlignItems.UNSAFE.END = AlignItems.UNSAFE(Flex.END);
AlignItems.UNSAFE.FLEX_START = AlignItems.UNSAFE(Flex.FLEX_START);
AlignItems.UNSAFE.FLEX_END = AlignItems.UNSAFE(Flex.FLEX_END);
AlignItems.UNSAFE.SELF_START = AlignItems.UNSAFE(Flex.SELF_START);
AlignItems.UNSAFE.SELF_END = AlignItems.UNSAFE(Flex.SELF_END);

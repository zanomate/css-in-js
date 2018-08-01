import { Flex } from 'properties';
import { space } from 'utils';

export const AlignSelf = (value) => ({alignItems: value});

AlignSelf.NORMAL = AlignSelf(Flex.NORMAL);
AlignSelf.STRETCH = AlignSelf(Flex.STRETCH);
AlignSelf.BASELINE = AlignSelf(Flex.BASELINE);
AlignSelf.FIRST_BASELINE = AlignSelf(Flex.FIRST_BASELINE);
AlignSelf.LAST_BASELINE = AlignSelf(Flex.LAST_BASELINE);

AlignSelf.CENTER = AlignSelf(Flex.CENTER);
AlignSelf.START = AlignSelf(Flex.START);
AlignSelf.END = AlignSelf(Flex.END);
AlignSelf.FLEX_START = AlignSelf(Flex.FLEX_START);
AlignSelf.FLEX_END = AlignSelf(Flex.FLEX_END);
AlignSelf.SELF_START = AlignSelf(Flex.SELF_START);
AlignSelf.SELF_END = AlignSelf(Flex.SELF_END);

AlignSelf.SAFE = (value) => AlignSelf(space(Flex.SAFE, value));
AlignSelf.SAFE.CENTER = AlignSelf.SAFE(Flex.CENTER);
AlignSelf.SAFE.START = AlignSelf.SAFE(Flex.START);
AlignSelf.SAFE.END = AlignSelf.SAFE(Flex.END);
AlignSelf.SAFE.FLEX_START = AlignSelf.SAFE(Flex.FLEX_START);
AlignSelf.SAFE.FLEX_END = AlignSelf.SAFE(Flex.FLEX_END);
AlignSelf.SAFE.SELF_START = AlignSelf.SAFE(Flex.SELF_START);
AlignSelf.SAFE.SELF_END = AlignSelf.SAFE(Flex.SELF_END);

AlignSelf.UNSAFE = (value) => AlignSelf(space(Flex.UNSAFE, value));
AlignSelf.UNSAFE.CENTER = AlignSelf.UNSAFE(Flex.CENTER);
AlignSelf.UNSAFE.START = AlignSelf.UNSAFE(Flex.START);
AlignSelf.UNSAFE.END = AlignSelf.UNSAFE(Flex.END);
AlignSelf.UNSAFE.FLEX_START = AlignSelf.UNSAFE(Flex.FLEX_START);
AlignSelf.UNSAFE.FLEX_END = AlignSelf.UNSAFE(Flex.FLEX_END);
AlignSelf.UNSAFE.SELF_START = AlignSelf.UNSAFE(Flex.SELF_START);
AlignSelf.UNSAFE.SELF_END = AlignSelf.UNSAFE(Flex.SELF_END);

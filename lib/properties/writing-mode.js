export const WritingMode = (value) => ({writingMode: value});

WritingMode.values = {
    HORIZONTAL_TB: 'horizontal-tb',
    VERTICAL_RL: 'vertical-rl',
    VERTICAL_LR: 'vertical-lr'
};

WritingMode.HORIZONTAL_TB = WritingMode(WritingMode.values.HORIZONTAL_TB);
WritingMode.VERTICAL_RL = WritingMode(WritingMode.values.VERTICAL_RL);
WritingMode.VERTICAL_LR = WritingMode(WritingMode.values.VERTICAL_LR);

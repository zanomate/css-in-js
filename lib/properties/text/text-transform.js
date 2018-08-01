export const TextTransform = (value) => ({textTransform: value});

TextTransform.values = {
    NONE: 'none',
    CAPITALIZE: 'capitalize',
    UPPERCASE: 'uppercase',
    LOWERCASE: 'lowercase',
    FULL_WIDTH: 'full-width'
};

TextTransform.NONE = TextTransform(TextTransform.values.NONE);
TextTransform.CAPITALIZE = TextTransform(TextTransform.values.CAPITALIZE);
TextTransform.UPPERCASE = TextTransform(TextTransform.values.UPPERCASE);
TextTransform.LOWERCASE = TextTransform(TextTransform.values.LOWERCASE);
TextTransform.FULL_WIDTH = TextTransform(TextTransform.values.FULL_WIDTH);

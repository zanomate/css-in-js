export const TextAlign = (value) => ({textAlign: value});

TextAlign.values = {
    LEFT: 'left',
    RIGHT: 'right',
    CENTER: 'center',
    JUSTIFY: 'justify',
    JUSTIFY_ALL: 'justify-all',
    START: 'start',
    END: 'end',
    MATCH_PARENT: 'match-parent'
};

TextAlign.LEFT = TextAlign(TextAlign.values.LEFT);
TextAlign.RIGHT = TextAlign(TextAlign.values.RIGHT);
TextAlign.CENTER = TextAlign(TextAlign.values.CENTER);
TextAlign.JUSTIFY = TextAlign(TextAlign.values.JUSTIFY);
TextAlign.JUSTIFY_ALL = TextAlign(TextAlign.values.JUSTIFY_ALL);
TextAlign.START = TextAlign(TextAlign.values.START);
TextAlign.END = TextAlign(TextAlign.values.END);
TextAlign.MATCH_PARENT = TextAlign(TextAlign.values.MATCH_PARENT);

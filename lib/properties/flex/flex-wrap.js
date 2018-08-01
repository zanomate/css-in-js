export const FlexWrap = (value) => ({flexWrap: value});
FlexWrap.values = {
    NOWRAP: 'nowrap',
    WRAP: 'wrap',
    WRAP_REVERSE: 'wrap-reverse'
};
FlexWrap.NOWRAP = ({flexWrap: FlexWrap.values.NOWRAP});
FlexWrap.WRAP = ({flexWrap: FlexWrap.values.WRAP});
FlexWrap.WRAP_REVERSE = ({flexWrap: FlexWrap.values.WRAP_REVERSE});

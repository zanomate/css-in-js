export const FlexDirection = (value) => ({flexDirection: value});
FlexDirection.values = {
    ROW: 'row',
    ROW_REVERSE: 'row-reverse',
    COL: 'col',
    COL_REVERSE: 'col-reverse'
};
FlexDirection.ROW = ({flexDirection: FlexDirection.values.ROW});
FlexDirection.ROW_REVERSE = ({flexDirection: FlexDirection.values.ROW_REVERSE});
FlexDirection.COL = ({flexDirection: FlexDirection.values.COL});
FlexDirection.COL_REVERSE = ({flexDirection: FlexDirection.values.COL_REVERSE});

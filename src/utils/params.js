/**
 * Append an unit after the specified value
 * NOTE: 0 value is always printed without unit
 * USE: unit(15, 'px'): '15px'
 * USE: unit(0, 'px'): '0'
 */
export const unit = (value, unit) => `${value}${value ? unit : ''}`;

/**
 * Use any when you need to specify a generic value (or a group of value, i.e. margins) without a specific unit.
 * If a number if passed, appends the specified default unit
 * If a string is passed, prints it as is
 * If an array is passed, any item of is treated separately
 * USE: any(0, 'px'): '0'
 * USE: any(15, 'px'): '15px'
 * USE: any('15%', 'px'): '15%'
 * USE: any([0,15,'15%'], 'px'): '0 15px 15%'
 */
export const any = (value, defaultUnit) => {
    if(Array.isArray(value)) {
        let res = [];
        for(const elem of value) {
            res.push(any(elem, defaultUnit));
        }
        return res.join(' ');
    }
    if(typeof value === 'number')
        return unit(value,defaultUnit);
    if(typeof value === 'string')
        return value;
    return (typeof value === 'number') ? unit(value, defaultUnit) : value;
};

/**
 * Append an withUnit after the specified value
 * NOTE: 0 value is always printed without withUnit
 * USE: withUnit(15, 'px'): '15px'
 * USE: withUnit(0, 'px'): '0'
 */
export const withUnit = (value, unit) => `${value}${value ? unit : ''}`;

/**
 * Use any when you need to specify a generic value (or a group of value, i.e. margins) without a specific withUnit.
 * If a number if passed, appends the specified default withUnit
 * If a string is passed, prints it as is
 * If an array is passed, any item of is treated separately
 * USE: any(0, 'px'): '0'
 * USE: any(15, 'px'): '15px'
 * USE: any('15%', 'px'): '15%'
 * USE: any([0,15,'15%'], 'px'): '0 15px 15%'
 */
export const any = (value, defaultUnit) => {
    if (Array.isArray(value)) {
        let res = [];
        for (const elem of value) {
            res.push(any(elem, defaultUnit));
        }
        return res.join(' ');
    }
    if (typeof value === 'number') {
        return withUnit(value, defaultUnit);
    }
    if (typeof value === 'string') {
        return value;
    }
    return (typeof value === 'number') ? withUnit(value, defaultUnit) : value;
};

/**
 * Check if the value is valid
 */
export const isValid = (value) => typeof value !== 'string' || value;

/**
 * Serialize passed (valid) values with a space between them.
 */
export const space = (...values) => values.filter(value => isValid(value)).join(' ');

/**
 * Serialize passed (valid) values with a comma between them.
 */
export const comma = (...values) => values.filter(value => isValid(value)).join(', ');

/**
 * Build a method with the specified name and parameters.
 * Invalid parameters are discarded.
 */
export const method = (name, ...params) => name + '(' + comma(...params) + ')';

/**
 * Use this method to get an array of 4 parameters from a source of 1-4 values.
 * The returning array represents values for top, right, bottom and left position.
 */
export const clockwise = (v1, v2, v3, v4) => {
    if (v4) {
        return [v1, v2, v3, v4];
    }
    if (v3) {
        return [v1, v2, v3, v2];
    }
    if (v2) {
        return [v1, v2, v1, v2];
    }
    if (v1) {
        return [v1, v1, v1, v1];
    }
    return [];
};
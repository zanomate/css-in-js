import { any, method } from 'utils';
import { Unit } from 'data-types';

export const all = (value) => method('all', value);

/**
 * calc() method. Any argument passed other than the first one will be concatenate
 * with a '+' operational symbol.
 * @example
 * calc(10,20): calc(10px + 20px)
 * @example
 * calc(cent(50), -10, em(-5)): calc(50% + -10 + -5em)
 * @example
 * calc(cent(100) + '*0.33', 20): calc(100%*0.33 + 20px)
 */
export const calc = (...values) => method('calc', values.map(value => any(value, Unit.PX)).join(' + '));

// Font Variant

export const stylistic = (feature) => method('stylistic', feature);

export const styleset = (...features) => method('styleset', ...features);

export const characterVariant = (...features) => method('character-variant', ...features);

export const swash = (feature) => method('swash', feature);

export const ornaments = (feature) => method('ornaments', feature);

export const annotation = (feature) => method('annotation', feature);

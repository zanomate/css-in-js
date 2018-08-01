import { any, comma, space } from 'utils';
import { annotation, characterVariant, ornaments, styleset, stylistic, swash } from 'methods';
import { Unit } from 'data-types';
import { css } from 'css';
import { LineHeight } from 'properties/text/line-height';

export const Font = (style, variant, weight, size, lineHeight, family) => css(
    FontStyle(style),
    FontVariant(variant),
    FontWeight(weight),
    FontSize(size),
    LineHeight(lineHeight),
    FontFamily(family)
);

export const FontStyle = (value, angle) => ({fontStyle: space(value, angle)});
FontStyle.values = {
    NORMAL: 'normal',
    ITALIC: 'italic',
    OBLIQUE: 'oblique'
};
FontStyle.NORMAL = FontStyle(FontStyle.values.NORMAL);
FontStyle.ITALIC = FontStyle(FontStyle.values.ITALIC);
FontStyle.OBLIQUE = FontStyle(FontStyle.values.OBLIQUE);
FontStyle.Oblique = (angle) => FontStyle(FontStyle.values.OBLIQUE, angle);

export const FontVariant = (...values) => ({fontVariant: space(...values)});
FontVariant.values = {
    NORMAL: 'normal',
    NONE: 'none',
    COMMON_LIGATURES: 'common-ligatures',
    NO_COMMON_LIGATURES: 'no-common-ligatures',
    DISCRETIONARY_LIGATURES: 'discretionary-ligatures',
    NO_DISCRETIONARY_LIGATURES: 'no-discretionary-ligatures',
    HISTORICAL_LIGATURES: 'historical-ligatures',
    NO_HISTORICAL_LIGATURES: 'no-historical-ligatures',
    CONTEXTUAL: 'contextual ',
    NO_CONTEXTUAL: 'no-contextual',
    HISTORICAL_FORMS: 'historical-forms',
    SMALL_CAPS: 'small-caps',
    ALL_SMALL_CAPS: 'all-small-caps',
    PETITE_CAPS: 'petite-caps',
    ALL_PETITE_CAPS: 'all-petite-caps',
    UNICASE: 'unicase ',
    TITLING_CAPS: 'titling-caps',
    LINING_NUMS: 'lining-nums',
    OLDSTYLE_NUMS: 'oldstyle-nums',
    PROPORTIONAL_NUMS: 'proportional-nums',
    TABULAR_NUMS: 'tabular-nums',
    DIAGONAL_FRACTIONS: 'diagonal-fractions',
    STACKED_FRACTIONS: 'stacked-fractions',
    ORDINAL: 'ordinal ',
    SLASHED_ZERO: 'slashed-zero',
    JIS78: 'jis78',
    JIS83: 'jis83',
    JIS90: 'jis90',
    JIS04: 'jis04',
    SIMPLIFIED: 'simplified',
    TRADITIONAL: 'traditional',
    FULL_WIDTH: 'full-width',
    PROPORTIONAL_WIDTH: 'proportional-width',
    RUBY: 'ruby'
};
FontVariant.NORMAL = FontVariant(FontVariant.values.NORMAL);
FontVariant.NONE = FontVariant(FontVariant.values.NONE);
FontVariant.COMMON_LIGATURES = FontVariant(FontVariant.values.COMMON_LIGATURES);
FontVariant.NO_COMMON_LIGATURES = FontVariant(FontVariant.values.NO_COMMON_LIGATURES);
FontVariant.DISCRETIONARY_LIGATURES = FontVariant(FontVariant.values.DISCRETIONARY_LIGATURES);
FontVariant.NO_DISCRETIONARY_LIGATURES = FontVariant(FontVariant.values.NO_DISCRETIONARY_LIGATURES);
FontVariant.HISTORICAL_LIGATURES = FontVariant(FontVariant.values.HISTORICAL_LIGATURES);
FontVariant.NO_HISTORICAL_LIGATURES = FontVariant(FontVariant.values.NO_HISTORICAL_LIGATURES);
FontVariant.CONTEXTUAL = FontVariant(FontVariant.values.CONTEXTUAL);
FontVariant.NO_CONTEXTUAL = FontVariant(FontVariant.values.NO_CONTEXTUAL);
FontVariant.HISTORICAL_FORMS = FontVariant(FontVariant.values.HISTORICAL_FORMS);
FontVariant.SMALL_CAPS = FontVariant(FontVariant.values.SMALL_CAPS);
FontVariant.ALL_SMALL_CAPS = FontVariant(FontVariant.values.ALL_SMALL_CAPS);
FontVariant.PETITE_CAPS = FontVariant(FontVariant.values.PETITE_CAPS);
FontVariant.ALL_PETITE_CAPS = FontVariant(FontVariant.values.ALL_PETITE_CAPS);
FontVariant.UNICASE = FontVariant(FontVariant.values.UNICASE);
FontVariant.TITLING_CAPS = FontVariant(FontVariant.values.TITLING_CAPS);
FontVariant.LINING_NUMS = FontVariant(FontVariant.values.LINING_NUMS);
FontVariant.OLDSTYLE_NUMS = FontVariant(FontVariant.values.OLDSTYLE_NUMS);
FontVariant.PROPORTIONAL_NUMS = FontVariant(FontVariant.values.PROPORTIONAL_NUMS);
FontVariant.TABULAR_NUMS = FontVariant(FontVariant.values.TABULAR_NUMS);
FontVariant.DIAGONAL_FRACTIONS = FontVariant(FontVariant.values.DIAGONAL_FRACTIONS);
FontVariant.STACKED_FRACTIONS = FontVariant(FontVariant.values.STACKED_FRACTIONS);
FontVariant.ORDINAL = FontVariant(FontVariant.values.ORDINAL);
FontVariant.SLASHED_ZERO = FontVariant(FontVariant.values.SLASHED_ZERO);
FontVariant.JIS78 = FontVariant(FontVariant.values.JIS78);
FontVariant.JIS83 = FontVariant(FontVariant.values.JIS83);
FontVariant.JIS90 = FontVariant(FontVariant.values.JIS90);
FontVariant.JIS04 = FontVariant(FontVariant.values.JIS04);
FontVariant.SIMPLIFIED = FontVariant(FontVariant.values.SIMPLIFIED);
FontVariant.TRADITIONAL = FontVariant(FontVariant.values.TRADITIONAL);
FontVariant.FULL_WIDTH = FontVariant(FontVariant.values.FULL_WIDTH);
FontVariant.PROPORTIONAL_WIDTH = FontVariant(FontVariant.values.PROPORTIONAL_WIDTH);
FontVariant.RUBY = FontVariant(FontVariant.values.RUBY);
FontVariant.Stylistic = (feature) => FontStyle(stylistic(feature));
FontVariant.Styleset = (...features) => FontStyle(styleset(...features));
FontVariant.CharacterVariant = (...features) => FontStyle(characterVariant(...features));
FontVariant.Swash = (feature) => FontStyle(swash(feature));
FontVariant.Ornaments = (feature) => FontStyle(ornaments(feature));
FontVariant.Annotation = (feature) => FontStyle(annotation(feature));

export const FontWeight = (value) => ({fontWeight: value});
FontWeight.values = {
    NORMAL: 'normal',
    BOLD: 'italic',
    BOLDER: 'oblique',
    LIGHTER: 'lighter'
};
FontWeight.NORMAL = FontWeight(FontWeight.values.NORMAL);
FontWeight.BOLD = FontWeight(FontWeight.values.BOLD);
FontWeight.BOLDER = FontWeight(FontWeight.values.BOLDER);
FontWeight.LIGHTER = FontWeight(FontWeight.values.LIGHTER);

export const FontSize = (value) => ({fontSize: any(value, Unit.PX)});
FontSize.values = {
    XX_SMALL: 'xx-small',
    X_SMALL: 'x-small',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    X_LARGE: 'x-large',
    XX_LARGE: 'xx-large',
    LARGER: 'larger',
    SMALLER: 'smaller'
};
FontSize.XX_SMALL = FontSize(FontSize.values.XX_SMALL);
FontSize.X_SMALL = FontSize(FontSize.values.X_SMALL);
FontSize.SMALL = FontSize(FontSize.values.SMALL);
FontSize.MEDIUM = FontSize(FontSize.values.MEDIUM);
FontSize.LARGE = FontSize(FontSize.values.LARGE);
FontSize.X_LARGE = FontSize(FontSize.values.X_LARGE);
FontSize.XX_LARGE = FontSize(FontSize.values.XX_LARGE);
FontSize.LARGER = FontSize(FontSize.values.LARGER);
FontSize.SMALLER = FontSize(FontSize.values.SMALLER);

export const FontFamily = (...values) => ({fontFamily: comma(...values)});
FontFamily.values = {
    SERIF: 'serif',
    SANS_SERIF: 'sans-serif',
    CURSIVE: 'cursive',
    FANTASY: 'fantasy',
    MONOSPACE: 'monospace',
};
FontFamily.SERIF = FontFamily(FontFamily.values.SERIF);
FontFamily.SANS_SERIF = FontFamily(FontFamily.values.SANS_SERIF);
FontFamily.CURSIVE = FontFamily(FontFamily.values.CURSIVE);
FontFamily.FANTASY = FontFamily(FontFamily.values.FANTASY);
FontFamily.MONOSPACE = FontFamily(FontFamily.values.MONOSPACE);

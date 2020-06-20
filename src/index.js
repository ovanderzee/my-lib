import { isUsableNumber } from './number/isUsableNumber'
import {
    isChar,
    isDigit,
    isLetter,
    isLower,
    isUpper,
} from './string/isCharType'
import { isAlphaNumeric } from './string/isStringType'
import { isExactMatch } from './regex/isExactMatch'
import { roundAtDecimals, roundAtDigits } from './math/round'
import { isPrimitive } from './type/isPrimitive.js'
import { isAttachedToDom } from './dom/isAttachedToDom'
import { greet } from './console/greet'

/**
 * Bundle alphabetically
 */
export {
    greet,
    isAlphaNumeric,
    isAttachedToDom,
    isExactMatch,
    isChar,
    isDigit,
    isLetter,
    isLower,
    isPrimitive,
    isUpper,
    isUsableNumber,
    roundAtDecimals,
    roundAtDigits,
}

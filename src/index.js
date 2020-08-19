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
import { arrayIntersection } from './array/arrayIntersection.js'
import { arrayFromQuery } from './dom/arrayFromQuery.js'
import { isEqualSigns } from './number/isEqualSigns.js'
import { arrayFromCommaSeparatedList } from './string/arrayFromCommaSeparatedList.js'
import { hasOwnProperty } from './object/hasOwnProperty.js'
import { mathSum, mathAvg } from './math/groupProperties'
import { isFundamental } from './type/isFundamental.js'
import { deepClone } from './object/deepClone.js'

/**
 * Bundle alphabetically
 */
export {
    greet,
    arrayFromCommaSeparatedList,
    arrayFromQuery,
    arrayIntersection,
    deepClone,
    hasOwnProperty,
    isAlphaNumeric,
    isFundamental,
    isAttachedToDom,
    isEqualSigns,
    isExactMatch,
    isChar,
    isDigit,
    isLetter,
    isLower,
    isPrimitive,
    isUpper,
    isUsableNumber,
    mathSum,
    mathAvg,
    roundAtDecimals,
    roundAtDigits,
}

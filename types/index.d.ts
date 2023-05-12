/**
 * Test for values with which calculations can be done
 * @param {Arguments} nums - one or more numeric values to test
 * @returns {boolean} every argument is a usable number
 */
declare const isUsableNumber: (...nums: number[]) => boolean;

/**
 * Test value for being a character; a string with a length of one
 * @param {string} char
 * @returns {boolean} is a single character
 */
declare const isChar: (char: string) => boolean;
/**
 * Test value for being a string representation of a digit
 * @param {string} char
 * @returns {boolean} is a number 0-9
 */
declare const isDigit: (char: string) => boolean;
/**
 * Test value for being a letter
 * @param {string} char
 * @returns {boolean} char is a letter
 */
declare const isLetter: (char: string) => boolean;
/**
 * Test value for being a lowercase letter
 * @param {string} char
 * @returns {boolean} char is a lower-case letter
 */
declare const isLower: (char: string) => boolean;
/**
 * Test value for being an uppercase letter
 * @param {string} char
 * @returns {boolean} char is a upper-case letter
 */
declare const isUpper: (char: string) => boolean;

/**
 * Test for being a string consisting of letters and/or digits,
 * for being undelimited
 * @param {string} word
 * @returns {boolean} consists of letters and/or digits only
 */
declare const isAlphaNumeric: (word: string) => boolean;

/**
 * Check for a match covering the string entirely
 * @param {string} word
 * @param {RegExp} regex
 * @returns {boolean} all characters of the word were described in regex
 */
declare const isExactMatch: (word: string, regex: RegExp) => boolean;

/**
 * Round at decimals
 * @param {number} origin - any number to round
 * @param {number} decimals - number of decimals to round at
 * @returns {number} the rounded number
 */
declare const roundAtDecimals: (origin: number, decimals: number) => number;
/**
 * Round at digits; round with significance
 * @param {number} origin - any number to round
 * @param {number} digits - number of significant digits to round at
 * @returns {number} the rounded number
 */
declare const roundAtDigits: (origin: number, digits: number) => number;

/**
 * Check value for being a primitive
 * but leave out the anti-value undefined;
 * @param {unknown} value - unknown value to check
 * @returns {boolean} is a primitive
 */
declare const isPrimitive: (value: unknown) => boolean;

/**
 * Check node for being part of the DOM
 * @param {Node} node
 * @returns {boolean} true when the node is on the webpage
 */
declare const isAttachedToDom: (elm: Element) => boolean;

/**
 * The sake of package; log the console
 */
declare const greet: () => void;

/**
 * Find unique values from both arrays
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array} the combination
 */
declare const arrayCombination: (array1: unknown[], array2: unknown[]) => unknown[];

/**
 * Find unique values appearing in both arrays
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array} the intersection
 */
declare const arrayIntersection: (array1: any[], array2: any[]) => unknown[];

/**
 * Create a genuine array from a css-query
 * @param {string} cssQuery
 * @returns {Node[]} array with Elements
 */
declare const arrayFromQuery: (cssQuery: string) => Node[];

/**
 * Check all arguments for being a number with the same sign
 * (Zero is sign-neutral)
 * @param {Arguments} nums - numeric arguments
 * @return {boolean} equality
 */
declare const isEqualSigns: (...nums: number[]) => boolean;

/**
 * Process comma separated list to a sanitised array with normalised strings
 * @param {string} commaSeperatedList
 * @returns {string[]} array with separate strings
 */
declare const arrayFromCommaSeparatedList: (commaSeparatedList: string) => string[];

/**
 * Check for existence of property in object
 * @param {object} object
 * @param {string} prop
 * @returns {boolean} the object has the property as its own property -- not inheriting it
 */
declare const hasOwnProperty: (object: Record<string, unknown>, prop: string) => boolean;

/**
 * Calculate sum of array with Numbers
 * @param {number[]} seq - array containing numbers
 * @return {number} the sum of the numbers
 */
declare const mathSum: (seq: number[]) => number;
/**
 * Calculate average of array with Numbers
 * @param {number[]} seq - array containing numbers
 * @return {number} the average of the numbers
 */
declare const mathAvg: (seq: number[]) => number;

/**
 * Check value for indivisible:
 * string, number, boolean, bigint, symbol, undefined, null, function
 * @param {unknown} value - unknown value to test
 * @returns {boolean}
 */
declare const isFundamental: (value: unknown) => boolean;

/**
 * Recursively copy all indivisible data to new object
 * Pay attention to Date and RegExp objects
 * @param {any} variable - any value to check
 * @returns {any} the same data with different references
 */
declare const deepClone: (variable: any) => any;

/**
 * Try generic ways to produce a string, an empty string if necessary
 * @param {any} value
 * @return {String} string represention of anything
 */
declare const forceStringify: (value: any) => string;
/**
 * Convert anything to a string, an empty string if necessary.
 * Expect sensible but not consistent cross-environment behaviour on functions.
 * @param {any} value
 * @return {String} string represention of anything
 */
declare const stringify: (value: any) => string;

export { arrayCombination, arrayFromCommaSeparatedList, arrayFromQuery, arrayIntersection, deepClone, forceStringify, greet, hasOwnProperty, isAlphaNumeric, isAttachedToDom, isChar, isDigit, isEqualSigns, isExactMatch, isFundamental, isLetter, isLower, isPrimitive, isUpper, isUsableNumber, mathAvg, mathSum, roundAtDecimals, roundAtDigits, stringify };

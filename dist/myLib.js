!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).myLib={})}(this,(function(e){"use strict";const t=e=>Boolean(e&&"string"==typeof e&&1===e.length),o=e=>t(e)&&Boolean(e.match(/[0-9]/)),s=e=>t(e)&&e.toLowerCase()!==e.toUpperCase();e.isAlphaNumeric=e=>e&&e.split&&!e.split("").some(e=>!(s(e)||o(e))),e.isChar=t,e.isDigit=o,e.isExactMatch=(e,t)=>{const o=e.match(t);return o&&o[0]===e},e.isLetter=s,e.isLower=e=>t(e)&&e===e.toLowerCase()&&e!==e.toUpperCase(),e.isUpper=e=>t(e)&&e===e.toUpperCase()&&e!==e.toLowerCase(),e.isUsableNumber=function(){let e=Boolean(arguments.length);return Array.from(arguments).forEach(t=>{e=e&&"number"==typeof t&&Number.isFinite(t)}),e},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=myLib.js.map

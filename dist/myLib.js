!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).myLib={})}(this,(function(e){"use strict";const t=e=>Boolean(e&&"string"==typeof e&&1===e.length),n=e=>t(e)&&Boolean(e.match(/[0-9]/)),r=e=>t(e)&&e.toLowerCase()!==e.toUpperCase(),o=function(e,t){return e<"1e-"+t&&e>"-1e-"+t?0:Number(Math.round(e+"e"+t)+"e-"+t)},i=e=>"object"==typeof e&&(e instanceof String||e instanceof Number||e instanceof BigInt||e instanceof Boolean||e instanceof Symbol),a=e=>e.reduce(((e,t)=>e+t),0),f=function(e){let t="object"!=typeof e;return t=t||null===e||i(e),t},s=function(e){let t=e;if(f(e))return e;if(Array.isArray(e)){t=[];for(let n of e)t.push(s(n))}else if(e instanceof Date)t=new Date(e.getTime());else if(e instanceof RegExp)t=new RegExp(e.source,e.flags);else if("object"==typeof e){t={};for(let[n,r]of Object.entries(e))t[n]=s(r)}return t},u=function(e){try{return JSON.stringify(e)}catch(e){return""}},c=function(e){let t;try{return t=String(e),"[object Object]"===t&&(t=u(e)),t}catch(t){return u(e)}};e.arrayCombination=function(e,t){const n=[...e,...t],r=new Set(n);return Array.from(r)},e.arrayFromCommaSeparatedList=function(e){return e.split(",").map((e=>e.trim().replace(/\s+/g," "))).filter((e=>e.length))},e.arrayFromQuery=function(e){let t=[];return t.push.apply(t,document.querySelectorAll(e)),t},e.arrayIntersection=function(e,t){let n={};return e.forEach((e=>n[e]=1)),t.filter((e=>{if(1===n[e])return delete n[e],e}))},e.deepClone=s,e.forceStringify=c,e.greet=()=>{console.log("Hello World!")},e.hasOwnProperty=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.isAlphaNumeric=e=>e&&e.split&&!e.split("").some((e=>!(r(e)||n(e)))),e.isAttachedToDom=function(e){return e&&(e.getRootNode()instanceof Document||e.getRootNode()instanceof ShadowRoot)},e.isChar=t,e.isDigit=n,e.isEqualSigns=function(){let e=[...arguments].filter((e=>e>=0)),t=[...arguments].filter((e=>e<=0));return e.length===arguments.length||t.length===arguments.length},e.isExactMatch=(e,t)=>{const n=e.match(t);return n&&n[0]===e},e.isFundamental=f,e.isLetter=r,e.isLower=e=>t(e)&&e===e.toLowerCase()&&e!==e.toUpperCase(),e.isPrimitive=function(e){const t="string"==typeof e||"number"==typeof e||"boolean"==typeof e||"bigint"==typeof e||"symbol"==typeof e;return i(e)||t},e.isUpper=e=>t(e)&&e===e.toUpperCase()&&e!==e.toLowerCase(),e.isUsableNumber=function(){let e=Boolean(arguments.length);return Array.from(arguments).forEach((t=>{e=e&&"number"==typeof t&&Number.isFinite(t)})),e},e.mathAvg=e=>a(e)/e.length||0,e.mathSum=a,e.roundAtDecimals=o,e.roundAtDigits=function(e,t){const n=function(e,t){if(isNaN(e)||!Number.isInteger(t)||t<1)return"NaN";const n=Math.abs(e);if(0===n)return"0";if(n===1/0)return String(e);const r=Math.floor(Math.log(n)/Math.log(10)),i=e/Math.pow(10,r);return o(i,t-1)+"e"+r}(e,t);return Number(n)},e.stringify=function(e){let t;try{return t=e.toString(),"[object Object]"===t&&(t=c(e)),t}catch(t){return c(e)}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=myLib.js.map

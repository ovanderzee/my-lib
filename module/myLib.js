const t=function(...t){let e=Boolean(t.length);return Array.from(t).forEach((t=>{e=e&&"number"==typeof t&&Number.isFinite(t)})),e},e=t=>Boolean(t&&"string"==typeof t&&1===t.length),n=t=>e(t)&&Boolean(t.match(/[0-9]/)),o=t=>e(t)&&t.toLowerCase()!==t.toUpperCase(),r=t=>e(t)&&t===t.toLowerCase()&&t!==t.toUpperCase(),i=t=>e(t)&&t===t.toUpperCase()&&t!==t.toLowerCase(),c=t=>Boolean(t&&t.split&&!t.split("").some((t=>!(o(t)||n(t))))),f=(t,e)=>{const n=t.match(e),o=n&&n[0]===t;return Boolean(o)},u=function(t,e){return t<"1e-"+e&&t>"-1e-"+e?0:Number(Math.round(t+"e"+e)+"e-"+e)},l=function(t,e){const n=function(t,e){if(isNaN(t)||!Number.isInteger(e)||e<1)return"NaN";const n=Math.abs(t);if(0===n)return"0";if(n===1/0)return String(t);const o=Math.floor(Math.log(n)/Math.log(10)),r=t/Math.pow(10,o);return u(r,e-1)+"e"+o}(t,e);return Number(n)},a=function(t){return"object"==typeof t&&(t instanceof String||t instanceof Number||t instanceof BigInt||t instanceof Boolean||t instanceof Symbol)},s=function(t){const e="string"==typeof t||"number"==typeof t||"boolean"==typeof t||"bigint"==typeof t||"symbol"==typeof t;return a(t)||e},p=function(t){return t&&(t.getRootNode()instanceof Document||t.getRootNode()instanceof ShadowRoot)},g=()=>{console.log("Hello World!")},h=function(t,e){const n=[...t,...e],o=new Set(n);return Array.from(o)},y=function(t,e){let n={};return t.forEach((t=>n[t]=1)),e.filter((t=>{if(1===n[t])return delete n[t],t}))},b=function(t){let e=[];const n=document.querySelectorAll(t);return e.push.apply(e,Array.from(n)),e},m=function(){let t=[...arguments].filter((t=>t>=0)),e=[...arguments].filter((t=>t<=0));return t.length===arguments.length||e.length===arguments.length},N=function(t){return t.split(",").map((t=>t.trim().replace(/\s+/g," "))).filter((t=>t.length))},j=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},w=t=>t.reduce(((t,e)=>t+e),0),S=t=>w(t)/t.length||0,d=function(t){let e="object"!=typeof t;return e=e||null===t||a(t),e},B=function(t){let e=t;if(d(t))return t;if(Array.isArray(t)){e=[];for(let n of t)e.push(B(n))}else if(t instanceof Date)e=new Date(t.getTime());else if(t instanceof RegExp)e=new RegExp(t.source,t.flags);else if("object"==typeof t){e={};for(let[n,o]of Object.entries(t))e[n]=B(o)}return e},A=function(t){try{return JSON.stringify(t)}catch(t){return""}},C=function(t){let e;try{return e=String(t),"[object Object]"===e&&(e=A(t)),e}catch(e){return A(t)}},M=function(t){let e;try{return e=t.toString(),"[object Object]"===e&&(e=C(t)),e}catch(e){return C(t)}};export{h as arrayCombination,N as arrayFromCommaSeparatedList,b as arrayFromQuery,y as arrayIntersection,B as deepClone,C as forceStringify,g as greet,j as hasOwnProperty,c as isAlphaNumeric,p as isAttachedToDom,e as isChar,n as isDigit,m as isEqualSigns,f as isExactMatch,d as isFundamental,o as isLetter,r as isLower,s as isPrimitive,i as isUpper,t as isUsableNumber,S as mathAvg,w as mathSum,u as roundAtDecimals,l as roundAtDigits,M as stringify};
//# sourceMappingURL=myLib.js.map

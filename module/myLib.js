const o=function(){let o=Boolean(arguments.length);return Array.from(arguments).forEach(e=>{o=o&&"number"==typeof e&&Number.isFinite(e)}),o},e=o=>Boolean(o&&"string"==typeof o&&1===o.length),t=o=>e(o)&&Boolean(o.match(/[0-9]/)),n=o=>e(o)&&o.toLowerCase()!==o.toUpperCase(),r=o=>e(o)&&o===o.toLowerCase()&&o!==o.toUpperCase(),a=o=>e(o)&&o===o.toUpperCase()&&o!==o.toLowerCase(),s=o=>o&&o.split&&!o.split("").some(o=>!(n(o)||t(o))),u=(o,e)=>{const t=o.match(e);return t&&t[0]===o},f=function(o,e){return o<"1e-"+e&&o>"-1e-"+e?0:Number(Math.round(o+"e"+e)+"e-"+e)},p=function(o,e){const t=Math.floor(Math.log(Math.abs(o))/Math.log(10)),n=o/Math.pow(10,t),r=f(n,e-1);return Number(r+"e"+t)},c=function(o){return"string"==typeof o||"number"==typeof o||"boolean"==typeof o},i=function(o){return o&&(o.getRootNode()instanceof Document||o.getRootNode()instanceof ShadowRoot)};export{s as isAlphaNumeric,i as isAttachedToDom,e as isChar,t as isDigit,u as isExactMatch,n as isLetter,r as isLower,c as isPrimitive,a as isUpper,o as isUsableNumber,f as roundAtDecimals,p as roundAtDigits};
//# sourceMappingURL=myLib.js.map

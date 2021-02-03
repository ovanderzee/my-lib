[![Build Status](https://travis-ci.org/ovanderzee/my-lib.svg?branch=master)](https://travis-ci.org/ovanderzee/my-lib)
[![Coverage Status](https://coveralls.io/repos/github/ovanderzee/my-lib/badge.svg?branch=master)](https://coveralls.io/github/ovanderzee/my-lib?branch=master)

# my-lib

Library of recurring, unconnected functions

## Install and usage

Install the package as npm package. Provided are
a umd-formatted file in the dist folder to require or to just load

```html
<script src="../../node_modules/dist/myLib.js"></script>
<script src="https://unpkg.com/my-lib@latest"></script>
```

and an es-module in the module folder to import the separate functions
or to import all

```js
import { isAlphaNumeric } from 'my-lib'
import * as myLib from 'my-lib'
```

[//]: # (Contents)

## Functions

<dl>
<dt><a href="#arrayCombination">arrayCombination(array1, array2)</a> ⇒ <code>Array</code></dt>
<dd><p>Find unique values from both arrays</p>
</dd>
<dt><a href="#arrayIntersection">arrayIntersection(array1, array2)</a> ⇒ <code>Array</code></dt>
<dd><p>Find unique values appearing in both arrays</p>
</dd>
<dt><a href="#greet">greet()</a></dt>
<dd><p>The sake of package; log the console</p>
</dd>
<dt><a href="#arrayFromQuery">arrayFromQuery(cssQuery)</a> ⇒ <code>Array.&lt;Node&gt;</code></dt>
<dd><p>Create a genuine array from a css-query</p>
</dd>
<dt><a href="#isAttachedToDom">isAttachedToDom(node)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check node for being part of the DOM</p>
</dd>
<dt><a href="#viewPosition">viewPosition(target, offset)</a> ⇒ <code>Object</code></dt>
<dd><p>Position element in a two columns, three rows grid of the viewport</p>
</dd>
<dt><a href="#mathSum">mathSum(seq)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate sum of array with Numbers</p>
</dd>
<dt><a href="#mathAvg">mathAvg(seq)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate average of array with Numbers</p>
</dd>
<dt><a href="#roundAtDecimals">roundAtDecimals(origin, decimals)</a> ⇒ <code>number</code></dt>
<dd><p>Round at decimals</p>
</dd>
<dt><a href="#roundAtDigitsExponent">roundAtDigitsExponent(origin, digits)</a> ⇒ <code>string</code></dt>
<dd><p>Round at digits to exponential notation; round with significance</p>
</dd>
<dt><a href="#roundAtDigits">roundAtDigits(origin, digits)</a> ⇒ <code>number</code></dt>
<dd><p>Round at digits; round with significance</p>
</dd>
<dt><a href="#isEqualSigns">isEqualSigns(anonymus)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check all arguments for being a number with the same sign</p>
</dd>
<dt><a href="#isUsableNumber">isUsableNumber(anonymus)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for values with which calculations can be done</p>
</dd>
<dt><a href="#deepClone">deepClone(variable)</a> ⇒ <code>any</code></dt>
<dd><p>Recursively copy all indivisible data to new object
Pay attention to Date and RegExp objects</p>
</dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(object, prop)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check for existence of property in object</p>
</dd>
<dt><a href="#isExactMatch">isExactMatch(word, regex)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check for a match covering the string entirely</p>
</dd>
<dt><a href="#arrayFromCommaSeparatedList">arrayFromCommaSeparatedList(commaSeperatedList)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Process comma separated list to a sanitised array with normalised strings</p>
</dd>
<dt><a href="#isChar">isChar(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a character; a string with a length of one</p>
</dd>
<dt><a href="#isDigit">isDigit(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a string representation of a digit</p>
</dd>
<dt><a href="#isLetter">isLetter(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a letter</p>
</dd>
<dt><a href="#isLower">isLower(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a lowercase letter</p>
</dd>
<dt><a href="#isUpper">isUpper(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being an uppercase letter</p>
</dd>
<dt><a href="#isAlphaNumeric">isAlphaNumeric(word)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being a string consisting of letters and/or digits</p>
</dd>
<dt><a href="#forceStringify">forceStringify(value)</a> ⇒ <code>String</code></dt>
<dd><p>Try generic ways to produce a string, an empty string if necessary</p>
</dd>
<dt><a href="#stringify">stringify(value)</a> ⇒ <code>String</code></dt>
<dd><p>Convert anything to a string, an empty string if necessary.
Expect sensible but not consistent cross-environment behaviour on functions.</p>
</dd>
<dt><a href="#isFundamental">isFundamental(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value for indivisible:
string, number, boolean, bigint, symbol, undefined, null, function</p>
</dd>
<dt><a href="#isPrimitive">isPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value for being a primitive
but leave out the anti-value undefined;</p>
</dd>
<dt><a href="#isWrappedPrimitive">isWrappedPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check the variable for living in an object wrapper
These can be generated by new String / Number etc.
see <a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive">https://developer.mozilla.org/en-US/docs/Glossary/Primitive</a></p>
</dd>
</dl>

<a name="arrayCombination"></a>

## arrayCombination(array1, array2) ⇒ <code>Array</code>
Find unique values from both arrays

**Kind**: global function  
**Returns**: <code>Array</code> - the combination  

| Param | Type |
| --- | --- |
| array1 | <code>Array</code> | 
| array2 | <code>Array</code> | 

<a name="arrayIntersection"></a>

## arrayIntersection(array1, array2) ⇒ <code>Array</code>
Find unique values appearing in both arrays

**Kind**: global function  
**Returns**: <code>Array</code> - the intersection  

| Param | Type |
| --- | --- |
| array1 | <code>Array</code> | 
| array2 | <code>Array</code> | 

<a name="greet"></a>

## greet()
The sake of package; log the console

**Kind**: global function  
<a name="arrayFromQuery"></a>

## arrayFromQuery(cssQuery) ⇒ <code>Array.&lt;Node&gt;</code>
Create a genuine array from a css-query

**Kind**: global function  
**Returns**: <code>Array.&lt;Node&gt;</code> - array with HTMLElements  

| Param | Type |
| --- | --- |
| cssQuery | <code>string</code> | 

<a name="isAttachedToDom"></a>

## isAttachedToDom(node) ⇒ <code>boolean</code>
Check node for being part of the DOM

**Kind**: global function  
**Returns**: <code>boolean</code> - true when the node is on the webpage  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 

<a name="viewPosition"></a>

## viewPosition(target, offset) ⇒ <code>Object</code>
Position element in a two columns, three rows grid of the viewport

**Kind**: global function  
**Returns**: <code>Object</code> - specialised functions  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>HTMLElement</code> | the element to position |
| offset | <code>Number</code> | distance to maintain |


* [viewPosition(target, offset)](#viewPosition) ⇒ <code>Object</code>
    * [~pointer(event)](#viewPosition..pointer)
    * [~aside(event)](#viewPosition..aside)

<a name="viewPosition..pointer"></a>

### viewPosition~pointer(event)
Position at center side of pointer
Good for hints (small, near pointer)

**Kind**: inner method of [<code>viewPosition</code>](#viewPosition)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | mouse event |

<a name="viewPosition..aside"></a>

### viewPosition~aside(event)
Position left or right of viewport
Good when with a lot of information (wide)
or when presenting for an audience (same position)

**Kind**: inner method of [<code>viewPosition</code>](#viewPosition)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | mouse event |

<a name="mathSum"></a>

## mathSum(seq) ⇒ <code>number</code>
Calculate sum of array with Numbers

**Kind**: global function  
**Returns**: <code>number</code> - the sum of the numbers  

| Param | Type | Description |
| --- | --- | --- |
| seq | <code>Array.&lt;number&gt;</code> | array containing numbers |

<a name="mathAvg"></a>

## mathAvg(seq) ⇒ <code>number</code>
Calculate average of array with Numbers

**Kind**: global function  
**Returns**: <code>number</code> - the average of the numbers  

| Param | Type | Description |
| --- | --- | --- |
| seq | <code>Array.&lt;number&gt;</code> | array containing numbers |

<a name="roundAtDecimals"></a>

## roundAtDecimals(origin, decimals) ⇒ <code>number</code>
Round at decimals

**Kind**: global function  
**Returns**: <code>number</code> - the rounded number  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | any number to round |
| decimals | <code>number</code> | number of decimals to round at |

<a name="roundAtDigitsExponent"></a>

## roundAtDigitsExponent(origin, digits) ⇒ <code>string</code>
Round at digits to exponential notation; round with significance

**Kind**: global function  
**Returns**: <code>string</code> - the rounded number as exponent  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | any number to round |
| digits | <code>number</code> | number of significant digits to round at |

<a name="roundAtDigits"></a>

## roundAtDigits(origin, digits) ⇒ <code>number</code>
Round at digits; round with significance

**Kind**: global function  
**Returns**: <code>number</code> - the rounded number  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | any number to round |
| digits | <code>number</code> | number of significant digits to round at |

<a name="isEqualSigns"></a>

## isEqualSigns(anonymus) ⇒ <code>boolean</code>
Check all arguments for being a number with the same sign

**Kind**: global function  
**Returns**: <code>boolean</code> - equality  

| Param | Type | Description |
| --- | --- | --- |
| anonymus | <code>Arguments</code> | numeric arguments |

<a name="isUsableNumber"></a>

## isUsableNumber(anonymus) ⇒ <code>boolean</code>
Test for values with which calculations can be done

**Kind**: global function  
**Returns**: <code>boolean</code> - every argument is a useable number  

| Param | Type | Description |
| --- | --- | --- |
| anonymus | <code>Arguments</code> | one or more values to test |

<a name="deepClone"></a>

## deepClone(variable) ⇒ <code>any</code>
Recursively copy all indivisible data to new object
Pay attention to Date and RegExp objects

**Kind**: global function  
**Returns**: <code>any</code> - the same data with different references  

| Param | Type | Description |
| --- | --- | --- |
| variable | <code>any</code> | any value to check |

<a name="hasOwnProperty"></a>

## hasOwnProperty(object, prop) ⇒ <code>boolean</code>
Check for existence of property in object

**Kind**: global function  
**Returns**: <code>boolean</code> - the object has the property as its own property -- not inheriting it  

| Param | Type |
| --- | --- |
| object | <code>object</code> | 
| prop | <code>string</code> | 

<a name="isExactMatch"></a>

## isExactMatch(word, regex) ⇒ <code>boolean</code>
Check for a match covering the string entirely

**Kind**: global function  
**Returns**: <code>boolean</code> - all characters of the word were described in regex  

| Param | Type |
| --- | --- |
| word | <code>string</code> | 
| regex | <code>RegExp</code> | 

<a name="arrayFromCommaSeparatedList"></a>

## arrayFromCommaSeparatedList(commaSeperatedList) ⇒ <code>Array.&lt;string&gt;</code>
Process comma separated list to a sanitised array with normalised strings

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - array with separate strings  

| Param | Type |
| --- | --- |
| commaSeperatedList | <code>string</code> | 

<a name="isChar"></a>

## isChar(char) ⇒ <code>boolean</code>
Test value for being a character; a string with a length of one

**Kind**: global function  
**Returns**: <code>boolean</code> - is a single character  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isDigit"></a>

## isDigit(char) ⇒ <code>boolean</code>
Test value for being a string representation of a digit

**Kind**: global function  
**Returns**: <code>boolean</code> - is a number 0-9  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isLetter"></a>

## isLetter(char) ⇒ <code>boolean</code>
Test value for being a letter

**Kind**: global function  
**Returns**: <code>boolean</code> - char is a letter  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isLower"></a>

## isLower(char) ⇒ <code>boolean</code>
Test value for being a lowercase letter

**Kind**: global function  
**Returns**: <code>boolean</code> - char is a lower-case letter  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isUpper"></a>

## isUpper(char) ⇒ <code>boolean</code>
Test value for being an uppercase letter

**Kind**: global function  
**Returns**: <code>boolean</code> - char is a upper-case letter  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isAlphaNumeric"></a>

## isAlphaNumeric(word) ⇒ <code>boolean</code>
Test for being a string consisting of letters and/or digits

**Kind**: global function  
**Returns**: <code>boolean</code> - consists of letters and/or digits only  

| Param | Type |
| --- | --- |
| word | <code>string</code> | 

<a name="forceStringify"></a>

## forceStringify(value) ⇒ <code>String</code>
Try generic ways to produce a string, an empty string if necessary

**Kind**: global function  
**Returns**: <code>String</code> - string represention of anything  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="stringify"></a>

## stringify(value) ⇒ <code>String</code>
Convert anything to a string, an empty string if necessary.
Expect sensible but not consistent cross-environment behaviour on functions.

**Kind**: global function  
**Returns**: <code>String</code> - string represention of anything  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="isFundamental"></a>

## isFundamental(value) ⇒ <code>boolean</code>
Check value for indivisible:
string, number, boolean, bigint, symbol, undefined, null, function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | value to test |

<a name="isPrimitive"></a>

## isPrimitive(value) ⇒ <code>boolean</code>
Check value for being a primitive
but leave out the anti-value undefined;

**Kind**: global function  
**Returns**: <code>boolean</code> - is a primitive  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | any value to check |

<a name="isWrappedPrimitive"></a>

## isWrappedPrimitive(value) ⇒ <code>boolean</code>
Check the variable for living in an object wrapper
These can be generated by new String / Number etc.
see https://developer.mozilla.org/en-US/docs/Glossary/Primitive

**Kind**: global function  
**Returns**: <code>boolean</code> - is a wrapped primitive  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | any value to check |



## Demo

[see demo folder](./demo)

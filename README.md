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

## Members

<dl>
<dt><a href="#mathSum">mathSum</a> ⇒ <code>number</code></dt>
<dd><p>Calculate average of array with Numbers</p></dd>
<dt><a href="#roundAtDecimals">roundAtDecimals</a> ⇒ <code>string</code></dt>
<dd><p>Round at digits to exponential notation; round with significance</p></dd>
<dt><a href="#roundAtDigitsExponent">roundAtDigitsExponent</a> ⇒ <code>number</code></dt>
<dd><p>Round at digits; round with significance</p></dd>
<dt><a href="#isChar">isChar</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a string representation of a digit</p></dd>
<dt><a href="#isDigit">isDigit</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a letter</p></dd>
<dt><a href="#isLetter">isLetter</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a lowercase letter</p></dd>
<dt><a href="#isLower">isLower</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being an uppercase letter</p></dd>
<dt><a href="#forceStringify">forceStringify</a> ⇒ <code>String</code></dt>
<dd><p>Convert anything to a string, an empty string if necessary.
Expect sensible but not consistent cross-environment behaviour on functions.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#arrayCombination">arrayCombination(array1, array2)</a> ⇒ <code>Array</code></dt>
<dd><p>Find unique values from both arrays</p></dd>
<dt><a href="#arrayIntersection">arrayIntersection(array1, array2)</a> ⇒ <code>Array</code></dt>
<dd><p>Find unique values appearing in both arrays</p></dd>
<dt><a href="#greet">greet()</a></dt>
<dd><p>The sake of package; log the console</p></dd>
<dt><a href="#arrayFromQuery">arrayFromQuery(cssQuery)</a> ⇒ <code>Array.&lt;Node&gt;</code></dt>
<dd><p>Create a genuine array from a css-query</p></dd>
<dt><a href="#isAttachedToDom">isAttachedToDom(node)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check node for being part of the DOM</p></dd>
<dt><a href="#mathSum">mathSum(seq)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate sum of array with Numbers</p></dd>
<dt><a href="#roundAtDecimals">roundAtDecimals(origin, decimals)</a> ⇒ <code>number</code></dt>
<dd><p>Round at decimals</p></dd>
<dt><a href="#isEqualSigns">isEqualSigns(anonymus)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check all arguments for being a number with the same sign</p></dd>
<dt><a href="#isUsableNumber">isUsableNumber(anonymous)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for values with which calculations can be done</p></dd>
<dt><a href="#deepClone">deepClone(variable)</a> ⇒ <code>any</code></dt>
<dd><p>Recursively copy all indivisible data to new object
Pay attention to Date and RegExp objects</p></dd>
<dt><a href="#hasOwnProperty">hasOwnProperty(object, prop)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check for existence of property in object</p></dd>
<dt><a href="#isExactMatch">isExactMatch(word, regex)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check for a match covering the string entirely</p></dd>
<dt><a href="#arrayFromCommaSeparatedList">arrayFromCommaSeparatedList(commaSeperatedList)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Process comma separated list to a sanitised array with normalised strings</p></dd>
<dt><a href="#isChar">isChar(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test value for being a character; a string with a length of one</p></dd>
<dt><a href="#isAlphaNumeric">isAlphaNumeric(word)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being a string consisting of letters and/or digits</p></dd>
<dt><a href="#forceStringify">forceStringify(value)</a> ⇒ <code>String</code></dt>
<dd><p>Try generic ways to produce a string, an empty string if necessary</p></dd>
</dl>

<a name="mathSum"></a>

## mathSum ⇒ <code>number</code>
<p>Calculate average of array with Numbers</p>

**Kind**: global variable  
**Returns**: <code>number</code> - <p>the average of the numbers</p>  

| Param | Type | Description |
| --- | --- | --- |
| seq | <code>Array.&lt;number&gt;</code> | <p>array containing numbers</p> |

<a name="roundAtDecimals"></a>

## roundAtDecimals ⇒ <code>string</code>
<p>Round at digits to exponential notation; round with significance</p>

**Kind**: global variable  
**Returns**: <code>string</code> - <p>the rounded number as exponent</p>  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | <p>any number to round</p> |
| digits | <code>number</code> | <p>number of significant digits to round at</p> |

<a name="roundAtDigitsExponent"></a>

## roundAtDigitsExponent ⇒ <code>number</code>
<p>Round at digits; round with significance</p>

**Kind**: global variable  
**Returns**: <code>number</code> - <p>the rounded number</p>  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | <p>any number to round</p> |
| digits | <code>number</code> | <p>number of significant digits to round at</p> |

<a name="isChar"></a>

## isChar ⇒ <code>boolean</code>
<p>Test value for being a string representation of a digit</p>

**Kind**: global variable  
**Returns**: <code>boolean</code> - <p>is a number 0-9</p>  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isDigit"></a>

## isDigit ⇒ <code>boolean</code>
<p>Test value for being a letter</p>

**Kind**: global variable  
**Returns**: <code>boolean</code> - <p>char is a letter</p>  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isLetter"></a>

## isLetter ⇒ <code>boolean</code>
<p>Test value for being a lowercase letter</p>

**Kind**: global variable  
**Returns**: <code>boolean</code> - <p>char is a lower-case letter</p>  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isLower"></a>

## isLower ⇒ <code>boolean</code>
<p>Test value for being an uppercase letter</p>

**Kind**: global variable  
**Returns**: <code>boolean</code> - <p>char is a upper-case letter</p>  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="forceStringify"></a>

## forceStringify ⇒ <code>String</code>
<p>Convert anything to a string, an empty string if necessary.
Expect sensible but not consistent cross-environment behaviour on functions.</p>

**Kind**: global variable  
**Returns**: <code>String</code> - <p>string represention of anything</p>  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="arrayCombination"></a>

## arrayCombination(array1, array2) ⇒ <code>Array</code>
<p>Find unique values from both arrays</p>

**Kind**: global function  
**Returns**: <code>Array</code> - <p>the combination</p>  

| Param | Type |
| --- | --- |
| array1 | <code>Array</code> | 
| array2 | <code>Array</code> | 

<a name="arrayIntersection"></a>

## arrayIntersection(array1, array2) ⇒ <code>Array</code>
<p>Find unique values appearing in both arrays</p>

**Kind**: global function  
**Returns**: <code>Array</code> - <p>the intersection</p>  

| Param | Type |
| --- | --- |
| array1 | <code>Array</code> | 
| array2 | <code>Array</code> | 

<a name="greet"></a>

## greet()
<p>The sake of package; log the console</p>

**Kind**: global function  
<a name="arrayFromQuery"></a>

## arrayFromQuery(cssQuery) ⇒ <code>Array.&lt;Node&gt;</code>
<p>Create a genuine array from a css-query</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;Node&gt;</code> - <p>array with Elements</p>  

| Param | Type |
| --- | --- |
| cssQuery | <code>string</code> | 

<a name="isAttachedToDom"></a>

## isAttachedToDom(node) ⇒ <code>boolean</code>
<p>Check node for being part of the DOM</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>true when the node is on the webpage</p>  

| Param | Type |
| --- | --- |
| node | <code>Node</code> | 

<a name="mathSum"></a>

## mathSum(seq) ⇒ <code>number</code>
<p>Calculate sum of array with Numbers</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>the sum of the numbers</p>  

| Param | Type | Description |
| --- | --- | --- |
| seq | <code>Array.&lt;number&gt;</code> | <p>array containing numbers</p> |

<a name="roundAtDecimals"></a>

## roundAtDecimals(origin, decimals) ⇒ <code>number</code>
<p>Round at decimals</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>the rounded number</p>  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | <p>any number to round</p> |
| decimals | <code>number</code> | <p>number of decimals to round at</p> |

<a name="isEqualSigns"></a>

## isEqualSigns(anonymus) ⇒ <code>boolean</code>
<p>Check all arguments for being a number with the same sign</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>equality</p>  

| Param | Type | Description |
| --- | --- | --- |
| anonymus | <code>Arguments</code> | <p>numeric arguments</p> |

<a name="isUsableNumber"></a>

## isUsableNumber(anonymous) ⇒ <code>boolean</code>
<p>Test for values with which calculations can be done</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>every argument is a usable number</p>  

| Param | Type | Description |
| --- | --- | --- |
| anonymous | <code>Arguments</code> | <p>one or more values to test</p> |

<a name="deepClone"></a>

## deepClone(variable) ⇒ <code>any</code>
<p>Recursively copy all indivisible data to new object
Pay attention to Date and RegExp objects</p>

**Kind**: global function  
**Returns**: <code>any</code> - <p>the same data with different references</p>  

| Param | Type | Description |
| --- | --- | --- |
| variable | <code>any</code> | <p>any value to check</p> |

<a name="hasOwnProperty"></a>

## hasOwnProperty(object, prop) ⇒ <code>boolean</code>
<p>Check for existence of property in object</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>the object has the property as its own property -- not inheriting it</p>  

| Param | Type |
| --- | --- |
| object | <code>object</code> | 
| prop | <code>string</code> | 

<a name="isExactMatch"></a>

## isExactMatch(word, regex) ⇒ <code>boolean</code>
<p>Check for a match covering the string entirely</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>all characters of the word were described in regex</p>  

| Param | Type |
| --- | --- |
| word | <code>string</code> | 
| regex | <code>RegExp</code> | 

<a name="arrayFromCommaSeparatedList"></a>

## arrayFromCommaSeparatedList(commaSeperatedList) ⇒ <code>Array.&lt;string&gt;</code>
<p>Process comma separated list to a sanitised array with normalised strings</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - <p>array with separate strings</p>  

| Param | Type |
| --- | --- |
| commaSeperatedList | <code>string</code> | 

<a name="isChar"></a>

## isChar(char) ⇒ <code>boolean</code>
<p>Test value for being a character; a string with a length of one</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>is a single character</p>  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isAlphaNumeric"></a>

## isAlphaNumeric(word) ⇒ <code>boolean</code>
<p>Test for being a string consisting of letters and/or digits</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>consists of letters and/or digits only</p>  

| Param | Type |
| --- | --- |
| word | <code>string</code> | 

<a name="forceStringify"></a>

## forceStringify(value) ⇒ <code>String</code>
<p>Try generic ways to produce a string, an empty string if necessary</p>

**Kind**: global function  
**Returns**: <code>String</code> - <p>string represention of anything</p>  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 



## Demo

[see demo folder](./demo)

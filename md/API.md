## Functions

<dl>
<dt><a href="#arrayIntersection">arrayIntersection(array1, array2)</a> ⇒ <code>Array</code></dt>
<dd><p>Find all values appearing in both arrays</p>
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
<dt><a href="#roundAtDecimals">roundAtDecimals(origin, decimals)</a> ⇒ <code>number</code></dt>
<dd><p>Round at decimals</p>
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
<dt><a href="#isPrimitive">isPrimitive(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check value for being a primitive</p>
</dd>
</dl>

<a name="arrayIntersection"></a>

## arrayIntersection(array1, array2) ⇒ <code>Array</code>
Find all values appearing in both arrays

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

<a name="roundAtDecimals"></a>

## roundAtDecimals(origin, decimals) ⇒ <code>number</code>
Round at decimals

**Kind**: global function  
**Returns**: <code>number</code> - the rounded number  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | any number to round |
| decimals | <code>number</code> | number of decimals to round at |

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

<a name="isPrimitive"></a>

## isPrimitive(value) ⇒ <code>boolean</code>
Check value for being a primitive

**Kind**: global function  
**Returns**: <code>boolean</code> - is a primitive  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | any value to check |

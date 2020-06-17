## Functions

<dl>
<dt><a href="#isUsableNumber">isUsableNumber(anonymus)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for values with which calculations can be done</p>
</dd>
<dt><a href="#isExactMatch">isExactMatch(word, regex)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check for a match covering the string entirely</p>
</dd>
<dt><a href="#isChar">isChar(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Helper Test for being a string with length 1</p>
</dd>
<dt><a href="#isDigit">isDigit(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being a string representation of a digit</p>
</dd>
<dt><a href="#isLetter">isLetter(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being a letter</p>
</dd>
<dt><a href="#isLower">isLower(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being a lowercase letter</p>
</dd>
<dt><a href="#isUpper">isUpper(char)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being an uppercase letter</p>
</dd>
<dt><a href="#isAlphaNumeric">isAlphaNumeric(line)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test for being a string consisting of letters and/or digits</p>
</dd>
</dl>

<a name="isUsableNumber"></a>

## isUsableNumber(anonymus) ⇒ <code>boolean</code>
Test for values with which calculations can be done

**Kind**: global function  
**Returns**: <code>boolean</code> - every argument is a useable number  

| Param | Type | Description |
| --- | --- | --- |
| anonymus | <code>Arguments</code> | one or more values to test |

<a name="isExactMatch"></a>

## isExactMatch(word, regex) ⇒ <code>boolean</code>
Check for a match covering the string entirely

**Kind**: global function  

| Param | Type |
| --- | --- |
| word | <code>string</code> | 
| regex | <code>RegExp</code> | 

<a name="isChar"></a>

## isChar(char) ⇒ <code>boolean</code>
Helper Test for being a string with length 1

**Kind**: global function  
**Returns**: <code>boolean</code> - is a single character  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isDigit"></a>

## isDigit(char) ⇒ <code>boolean</code>
Test for being a string representation of a digit

**Kind**: global function  
**Returns**: <code>boolean</code> - is a number 0-9  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isLetter"></a>

## isLetter(char) ⇒ <code>boolean</code>
Test for being a letter

**Kind**: global function  
**Returns**: <code>boolean</code> - char is a letter  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isLower"></a>

## isLower(char) ⇒ <code>boolean</code>
Test for being a lowercase letter

**Kind**: global function  
**Returns**: <code>boolean</code> - char is a lower-case letter  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isUpper"></a>

## isUpper(char) ⇒ <code>boolean</code>
Test for being an uppercase letter

**Kind**: global function  
**Returns**: <code>boolean</code> - char is a upper-case letter  

| Param | Type |
| --- | --- |
| char | <code>string</code> | 

<a name="isAlphaNumeric"></a>

## isAlphaNumeric(line) ⇒ <code>boolean</code>
Test for being a string consisting of letters and/or digits

**Kind**: global function  
**Returns**: <code>boolean</code> - consists of letters and/or digits only  

| Param | Type |
| --- | --- |
| line | <code>string</code> | 


<div align="center">
  <h1>Length.js</h1>
  <p>
    <em> JavaScript library for length units conversion</em>
  </p>
  <p>
    <a href="https://github.com/appalaszynski/length.js/blob/master/package.json">
      <img src="https://img.shields.io/github/package-json/v/appalaszynski/length.js.svg" />
    </a>
    <a href="https://github.com/appalaszynski/length.js/commits/master">
      <img src="https://img.shields.io/github/last-commit/appalaszynski/length.js.svg" />
    </a>
  </p>
  <br>
  <br>
</div>

---

## Installation

**Length** was designed to work both in the browser and in Node.js.

### Browser

```html
<script src="length.js"></script>
```

**Length** is available on **unpgk CDN** in [compressed](https://unpkg.com/length.js/min/length.min.js) and [uncompressed](https://unpkg.com/length.js) version.

### Node.js

```shell
npm install length.js
```

```javascript
var length = require('length.js');
// or using ES6 import
import length from 'length.js';
```

---

## Usage

**Length** creates an object which contains **value**, **unit**, and **conversion** methods.  
To get this object, simply call [**``length()``**](#lengthvalue-unit) with two supported arguments. Then you can convert passed value by calling one of available [method](#methods).  
  
The **Length** prototype is exposed through **``length.fn``** (if you want to add your own functions).

<hr />

### ``length(value, unit)``

Creates an object which contains value, unit, and conversion methods.

#### Arguments
* **value** _**``(Number)``**_: Number of units.
* **unit** _**``(String)``**_: Unit type.  
  
  Available unit types:
  * **``cm``**: centimeter,
  * **``m``**: meter,
  * **``ft``**: foot.

#### Returns
* _**``(Object)``**_: Returns new **Length** object.

#### Example
```javascript
length(12, 'cm');
```

---

## Methods

### ``.toMeter()``

#### Returns
* _**``(Number)``**_: Value converted to meters.

#### Example
```javascript
length(100, 'cm').toMeter();
// => 1
```
 
---

### ``.toCentimeter()``

#### Returns
* _**``(Number)``**_: Value converted to centimeters.

#### Example
```javascript
length(1, 'm').toCentimeter();
// => 100
```

---

### ``.toFoot()``

#### Returns
* _**``(Number)``**_: Value converted to foots.

#### Example
```javascript
length(1, 'm').toFoot();
// =>  3.280839895013
```

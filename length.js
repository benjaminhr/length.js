 /*!
  * length.js v0.0.1 (https://github.com/appalaszynski/length.js)
  * Copyright (c) 2018 appalaszynski (https://github.com/appalaszynski)
  * Licensed under MIT (https://github.com/appalaszynski/length.js/blob/master/LICENSE)
  */
;(function(global) {
  var length = function(value, unit) {
    validate(value, unit);
    return new Length(value, unit)
  }

  var supportedUnits = ['cm', 'm'];

  function validate(value, unit) {
    if (!value || !unit) {
      throw Error('You have to pass value and unit type!')
    }  else if (typeof value !== 'number') {
      throw Error('Value must be a number!')      
    } else if (supportedUnits.indexOf(unit) == -1) {
      throw Error('Unsupported unit type! Supported units list:\n' + supportedUnits)      
    }
  }
 
  function toMeter() {
    switch (this.unit) {
      case 'cm': {
        return this.value * 0.01;
      }
      case 'm': {
        return this.value;
      }
    }
  }

  function toCentimeter() {
    switch (this.unit) {
      case 'm': {
        return this.value * 100;
      }
      case 'cm': {
        return this.value;
      }
    }
  }

  var proto = Length.prototype = {};
  proto.toMeter = toMeter;
  proto.toCentimeter = toCentimeter;

  function Length(value, unit) {
    this.value = value || 1;
    this.unit = unit || 'cm';
  }

  global.length = global.L$ = length;
  if(typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = length
  }

}(this));
 
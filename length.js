 /*!
  * length.js v0.0.1 (https://github.com/appalaszynski/length.js)
  * Copyright (c) 2018 appalaszynski (https://github.com/appalaszynski)
  * Licensed under MIT (https://github.com/appalaszynski/length.js/blob/master/LICENSE)
  */
;(function(global) {

  // Main length function (availavlable by global.length) which is
  // allowing us to create an object by calling 'length()' istead of 'new Length()'
  var length = function(value, unit) {
    // Check if passed arguments are valid. If not - throw an error.
    validate(value, unit);
    return new Length(value, unit)
  }

  // Current length.js version.
  var version = "0.0.1";

  // Currently supported units.
  var supportedUnits = ['cm', 'm'];

  // Function used during new Length object creation. Check 'length' function.
  function validate(value, unit) {
    if (!value || !unit) {
      throw Error('You have to pass value and unit type!')
    }  else if (typeof value !== 'number') {
      throw Error('Value must be a number!')      
    } else if (supportedUnits.indexOf(unit) == -1) {
      throw Error('Unsupported unit type! Supported units list:\n' + supportedUnits)      
    }
  }
 
  // Functions which are going to be available in every Length object prototype.
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

  // Initialize Length object prototype
  var proto = Length.prototype = {};
  // Insert functions into Length object prototype
  proto.version = version;
  proto.toMeter = toMeter;
  proto.toCentimeter = toCentimeter;

  // The actual Length object is created here
  function Length(value, unit) {
    this.value = value || 1;
    this.unit = unit || 'cm';
  }

  // Expose 'length' and 'L$' identifiers
  global.length = global.L$ = length;
  if(typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = length
  }

}(this));
 
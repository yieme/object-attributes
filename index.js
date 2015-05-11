/** Returns an array of object keys
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     object-attributes
 */
 (function() {
  'use strict';
  var _ = require('lodash')
  function ObjectAttributesError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }

  /** Object Attributes
   *  @param      {object} object
   *  @return     {array} attributes
   */
  function objectAttributes(obj) {
    var result = []
    try {
      _.forEach(obj, function(n, attr) {
        result.push(attr)
      })
    } catch (error) {
      throw new ObjectAttributesError(error.message)
    }
    return result
  }


  module.exports = objectAttributes
})();

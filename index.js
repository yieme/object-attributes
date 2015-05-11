/** Returns an array of object keys
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     object-attributes
 */
 (function() {
  'use strict';
  function ObjectAttributesError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }

  /** Object attributes
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function objectAttributesClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = 'Hello, world'
    return self
  }



  /** Object attributes
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function objectAttributes(options) {
    return new objectAttributesClass(options)
  }


  module.exports = objectAttributes
})();

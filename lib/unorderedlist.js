// Copyright IBM Corp. 2012,2017. All Rights Reserved.
// Node module: loopback-component-oauth2
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
/**
 * `UnorderedList` constructor.
 *
 * @api public
 */
function UnorderedList(items) {
  if (typeof items == 'string') {
    items = items.split(' ');
  }
  this._items = items || [];
  this.__defineGetter__('length', this._length);
}

/**
 * Check if list is equal to `other` list.
 *
 * @param {UnorderedList} other
 * @return {Boolean}
 * @api public
 */
UnorderedList.prototype.equalTo = function(other) {
  if (!(other instanceof UnorderedList)) {
    other = new UnorderedList(other);
  }

  if (this.length != other.length) { return false; }
  for (let i = 0, len = this._items.length; i < len; i++) {
    const item = this._items[i];
    if (other._items.indexOf(item) == -1) {
      return false;
    }
  }
  return true;
};

/**
 * Check if list contains `val`
 *
 * @param {String} val
 * @return {Boolean}
 * @api public
 */
UnorderedList.prototype.contains = function(val) {
  return this._items.indexOf(val) != -1;
};

/**
 * Check if list contains any element in `arr`
 *
 * @param {Array} arr
 * @return {Boolean}
 * @api public
 */
UnorderedList.prototype.containsAny = function(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (this._items.indexOf(arr[i]) != -1) { return true; }
  }
  return false;
};

/**
 * String representation of list.
 *
 * @return {String}
 * @api private
 */
UnorderedList.prototype.toString = function() {
  return this._items.join(' ');
};

/**
 * Length of list.
 *
 * @return {Number}
 * @api private
 */
UnorderedList.prototype._length = function() {
  return this._items.length;
};

/**
 * Expose `UnorderedList`.
 */
module.exports = UnorderedList;

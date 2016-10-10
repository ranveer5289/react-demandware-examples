/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyObject = {};

if (dw.system.System.getInstanceType() !== dw.system.System.PRODUCTION_SYSTEM) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
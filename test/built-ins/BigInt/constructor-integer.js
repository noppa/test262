// Copyright (C) 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt constructor called with integer argument
esid: sec-bigint-constructor-number-value
info: |
  BigInt ( value )

  ...
  3. If Type(prim) is Number, return ? NumberToBigInt(prim).

  NumberToBigInt ( number )

  ...
  3. Return a BigInt representing the mathematical value of number.
features: [BigInt]
---*/

assert.sameValue(
  BigInt(Number.MAX_SAFE_INTEGER), 9007199254740991n,
  "BigInt(Number.MAX_SAFE_INTEGER) === 9007199254740991n"
);

assert.sameValue(
  BigInt(-Number.MAX_SAFE_INTEGER), -9007199254740991n,
  "BigInt(-Number.MAX_SAFE_INTEGER) === -9007199254740991n"
);

assert.throws(RangeError, function() {
  BigInt(Number.MAX_SAFE_INTEGER + 1);
}, "BigInt(Number.MAX_SAFE_INTEGER + 1) throws RangeError");

assert.throws(RangeError, function() {
  BigInt(-Number.MAX_SAFE_INTEGER - 1);
}, "BigInt(-Number.MAX_SAFE_INTEGER - 1) throws RangeError");

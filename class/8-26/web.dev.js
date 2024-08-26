// Although undefined and null have some functional overlap, they have different purposes. In the strictest sense, null represents a value intentionally defined as "blank," and undefined represents a lack of any assigned value.



import { expect } from 'chai';

expect(typeof null).to.equal('object');
expect(typeof undefined).to.equal('undefined');
expect(typeof true).to.equal('boolean');
expect(typeof false).to.equal('boolean');
expect(typeof 1).to.equal('number');
expect(typeof 1.1).to.equal('number');
expect(typeof 'string').to.equal('string');
expect(typeof {}).to.equal('object');
expect(typeof []).to.equal('object');
expect(typeof function() {}).to.equal('function');
expect(typeof new Date()).to.equal('object');
expect(typeof /./).to.equal('object');
expect(typeof new Error()).to.equal('object');
expect(typeof Symbol()).to.equal('symbol');
expect(typeof BigInt(1)).to.equal('bigint');
expect(typeof new Map()).to.equal('object');
expect(typeof new Set()).to.equal('object');
expect(typeof new WeakMap()).to.equal('object');
expect(typeof new WeakSet()).to.equal('object');
expect(typeof new Promise(() => {})).to.equal('object');


expect(null == undefined).to.equal(true);
expect(null === undefined).to.equal(false);

expect(Boolean(null)).to.equal(false);
expect(Boolean(undefined)).to.equal(false);

expect(typeof global).to.equal('object');



function isDict(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// // Examples
// console.log(isDict({ key: 'value' })); // true
// console.log(isDict([1, 2, 3]));        // false
// console.log(isDict(null));             // false
// console.log(isDict('string'));         // false
// console.log(isDict(123));              // false


expect(isDict(global)).to.equal(true);

const d = {
  key: 'value',
	nested: {
		key: 'value'
	}
};

expect('key' in d).to.equal(true);

expect('undefined' in global).to.equal(true);
expect('null' in global).to.equal(false);

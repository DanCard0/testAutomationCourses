var assert = require('assert');

describe('Mathematical operations - Test Suite', function(){

	this.timeout(5000);

	it('Addition of two numbers', function(done){

		setTimeout(done, 4500);

		var a = 10;
		var b = 10;
		
		var c = a + b;

		assert.equal(c, 20);
	});

	it('Substraction of two numbers', function(){
		var a = 10;
		var b = 10;

		var c = a - b;

		assert.equal(c, 0);
	});

	it('Multiplication of two numbers', function(){
		var a = 10;
		var b = 10;

		var c = a * b;

		assert.equal(c, 100);
	});

	it('Division of two numbers', function(){
		var a = 10;
		var b = 10;

		var c = a / b;

		assert.equal(c, 1);
	});

	it('Test for pending');
});

describe('Mocha hooks', function () {
	before('Before All Tests', function () {
		console.log('Before All Tests');
	});

	beforeEach('Before Each Tests', function () {
		console.log('Before Each Tests');
	});

	after('After All Tests', function () {
		console.log('After All Tests');
	});

	afterEach('After Each Tests', function () {
		console.log('After Each Tests');
	});

	it('Mocha hooks test', function () {
		console.log('Test for Mocha hooks');
	});
});
const expect = require('chai').expect;
const should = require('chai').should();
const _ = require('lodash');
const log = console.log;
const {
    stringValidator,
    nonEmptyStringValidator,
    checkString
} = require('../../utils/validators');
describe('validators',() => {
    it('basic test should run',() => {
        true.should.be.true;
    });
    describe('#stringValidator',() => {
        it('should return true for a word',() => {
            stringValidator('abc').should.be.true;
        });
        it('should return false for an empty string',() => {
            stringValidator('').should.be.true;
        });
        it('should return false when a number',() => {
            stringValidator(1).should.be.false;
        });
        it('should return false for a boolean',() => {
            stringValidator(true).should.be.false;
        });
        it('should return false for a class',() => {
            stringValidator({}).should.be.false;
        });

    });
    describe('#nonEmptyStringValidator',() => {
        it('should return false for an empty string ',() => {
            nonEmptyStringValidator('').should.be.false;
        });
        it('should return false when a number ',() => {
            nonEmptyStringValidator(1).should.be.false;
            
        });
        it('should return true for a single character string ',() => {
            nonEmptyStringValidator('a').should.be.true;
        });
        it('should return true for a single word ',() => {
            nonEmptyStringValidator('frogface').should.be.true;
        });
        it('should return true for a string that has spaces ',() => {
            nonEmptyStringValidator('a stitch in time saves nine').should.be.true;
        });
    });
    describe('#checkString',() => {
        it('should return an array for a word',() => {
            checkString('abc').should.be.an.instanceof(Array);
        });
        it('should return an empty array for a word',() => {
            checkString('abc').should.have.length(0);
        });
        it('should return an array when a number',() => {
            checkString(1).should.be.an.instanceof(Array);
        });
        it('should return array of length 2 when a number',() => {
            let result = checkString(1);
            result.should.have.length(2);
        });
        it('should return array that includes "Not a string data type" when a number',() => {
            let result = checkString(1);
            result.should.include("Not a string data type");
        });
        it('should return array that includes "An empty string is not allowed" when a number',() => {
            let result = checkString(1);
            result.should.include("An empty string is not allowed");
        });
        it('should return array that includes "An empty string is not allowed" when an empty string',() => {
            let result = checkString('');
            result.should.include("An empty string is not allowed");
        });
        it('should not return array that includes "Not a string data type" when an empty string',() => {
            let result = checkString('');
            result.should.not.include("Not a string data type");
        });
    });
});
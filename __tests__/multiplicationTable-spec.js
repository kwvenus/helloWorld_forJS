const multiplicationTable = require('../multiplicationTable');

const wrongStartNumber = 3;
const wrongEndNumber = 2;

const startNumber = 2;
const endNumber = 4;

it('Given 2 integers, when start number is smaller then or equal to end number, then return true, otherwise return false', function(){
    expect(multiplicationTable.isStartNumberSmallerThenOrEqualToEndNumber(startNumber, endNumber)).toBe(true);
    expect(multiplicationTable.isStartNumberSmallerThenOrEqualToEndNumber(wrongStartNumber, wrongEndNumber)).toBe(false);
});

it('Given 2 valid integers, when both integers are with in the range of 1-1000 inclusively, then return true, otherwise return false',function(){
    expect(multiplicationTable.areNumberWithInTheRange(startNumber, endNumber)).toBe(true);
    expect(multiplicationTable.areNumberWithInTheRange(wrongStartNumber, wrongEndNumber)).toBe(false);
});
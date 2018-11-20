const multiplicationTable = require('../multiplicationTable');

const wrongStartNumber = 3;
const wrongEndNumber = 2;

const startNumber = 2;
const endNumber = 4;

it('Given 2 integers, when start number is smaller then or equal to end number, then return true', function(){
    expect(multiplicationTable.isStartNumberSmallerThenOrEqualToEndNumber(startNumber, endNumber)).toBe(true);
    expect(multiplicationTable.isStartNumberSmallerThenOrEqualToEndNumber(wrongStartNumber, wrongEndNumber)).toBe(false);
});
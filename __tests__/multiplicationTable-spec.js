const multiplicationTable = require('../multiplicationTable');

const wrongStartNumber = 3;
const wrongEndNumber = 2;

const startNumber = 2;
const endNumber = 4;

const multiplicationCombination = multiplicationTable.findMultiplicationCombination(startNumber, endNumber);

it('Given 2 integers, when start number is smaller then or equal to end number (isStartNumberSmallerThenOrEqualToEndNumber), then return true, otherwise return false', function(){
    expect(multiplicationTable.isStartNumberSmallerThenOrEqualToEndNumber(startNumber, endNumber)).toBe(true);
    expect(multiplicationTable.isStartNumberSmallerThenOrEqualToEndNumber(wrongStartNumber, wrongEndNumber)).toBe(false);
});

it('Given 2 valid integers, when both integers are with in the range of 1-1000 inclusively (areNumberWithInTheRange), then return true, otherwise return false',function(){
    expect(multiplicationTable.areNumberWithInTheRange(startNumber, endNumber)).toBe(true);
    expect(multiplicationTable.areNumberWithInTheRange(wrongStartNumber, wrongEndNumber)).toBe(false);
});

it('Give 2 valid integers within the range of 1-1000 inclusively, when findMultiplicationCombination, then return multiplicationCombination[Object], where Object{startCombinationNumber:int, endCombinationNumber:int}].', function(){
    expect(multiplicationTable.findMultiplicationCombination(2, 4)).toEqual([
    {startCombinationNumber: 2, endCombinationNumber: 2},
    {startCombinationNumber: 2, endCombinationNumber: 3},
    {startCombinationNumber: 3, endCombinationNumber: 3},
    {startCombinationNumber: 2, endCombinationNumber: 4},
    {startCombinationNumber: 3, endCombinationNumber: 4},
    {startCombinationNumber: 4, endCombinationNumber: 4}]);
});

it('Give 2 valid integers within the range of 1-1000 inclusively and multiplicationCombination, when prepareMultiplicationTable, then return multiplcation table.].', function(){
    expect(multiplicationTable.prepareMultiplicationTable(multiplicationCombination)).toBe(
    "2*2=4  \n" +
    "2*3=6  3*3=9  \n" +
    "2*4=8  3*4=12  4*4=16  ");
});
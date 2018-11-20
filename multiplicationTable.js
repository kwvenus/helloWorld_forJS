function isStartNumberSmallerThenOrEqualToEndNumber(startNumber, endNumber){
        if (startNumber <= endNumber){
            return true;
        }else{
            return false;
        }
    }

function areNumberWithInTheRange(startNumber, endNumber){
    if (isStartNumberSmallerThenOrEqualToEndNumber(startNumber, endNumber)){
        if ((startNumber >= 1 && startNumber <=1000) &&(endNumber >=1 && endNumber <= 1000)){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function findMultiplicationCombination(startNumber, endNumber){
    let multiplicationCombination = [];
    let i, j;

    for (i = startNumber; i <= endNumber; i++){
        for (j = startNumber; j <= i; j++){
            multiplicationCombination.push({startCombinationNumber: j, endCombinationNumber: i});
        }
    }
    return multiplicationCombination;
}

function alignSpaceCount(startNumber, endNumber){
    const baseLength = 2;
    let numberLength = startNumber.toString().length + endNumber.toString().length;
    let ansNumberLength = (startNumber*endNumber).toString.length;

    return baseLength + numberLength + ansNumberLength;
}

function prepareMultiplicationTable(multiplicationCombination){
    let i, j;
    let multiplicationTable = '';
    let tempSpace = '';
    let lastElement = multiplicationCombination[(multiplicationCombination.length)-1];
    const finalSpace = alignSpaceCount(lastElement.startCombinationNumber, lastElement.endCombinationNumber);

    for (i = 0; i < multiplicationCombination.length; i++){
        multiplicationTable += multiplicationCombination[i].startCombinationNumber + "*" + multiplicationCombination[i].endCombinationNumber + "=" + (multiplicationCombination[i].endCombinationNumber * multiplicationCombination[i].startCombinationNumber);

            tempSpace = alignSpaceCount(multiplicationCombination[i].startCombinationNumber, multiplicationCombination[i].endCombinationNumber);
            for (j = 0; j <= (finalSpace-tempSpace+1); j++){
                multiplicationTable += ' ';
            }
        if (i != (multiplicationCombination.length)-1 && multiplicationCombination[i].startCombinationNumber == multiplicationCombination[i].endCombinationNumber)
            multiplicationTable += "\n";
    }
    return multiplicationTable;
}


module.exports = {
    isStartNumberSmallerThenOrEqualToEndNumber,
    areNumberWithInTheRange,
    findMultiplicationCombination,
    prepareMultiplicationTable
};
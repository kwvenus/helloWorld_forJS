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

module.exports = {
    isStartNumberSmallerThenOrEqualToEndNumber,
    areNumberWithInTheRange,
    findMultiplicationCombination
};
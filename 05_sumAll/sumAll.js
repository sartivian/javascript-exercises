const sumAll = function(beginning,end) {
    //check data type
    let beginningType = typeof beginning;
    let endType = typeof end;
    if (beginningType !== 'number' || endType !== 'number'){
        return "ERROR"
    }

    //return error if negative value
    if (beginning < 0 || end < 0){
        return "ERROR"
    }

    //check integer
    let beginCheck = Number.isInteger(beginning);
    let endCheck = Number.isInteger(end);
    if (beginCheck === false || endCheck === false){
        return "ERROR"
    }

    let result = 0
    if (beginning < end) {
        for (let i = beginning; i <= end; i++) {
            result += i;
            console.log("i : " + i);
            console.log("result : " + result);
        }
        return result;
    } else if (beginning > end) {
        for (let i = end; i <= beginning; i++) {
            result += i;
            console.log("i : " + i);
            console.log("result : " + result);
        }
        return result;
    }
    
};

// Do not edit below this line
module.exports = sumAll;

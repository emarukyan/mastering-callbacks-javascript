const giveRandAsync = callback => {
    const f = () => callback(Math.random())
    setTimeout(f, 10)
}
//======> subtask 1
// Call function 'giveRandAsync' 10 times and gather results in an array.
const arrayOfRand = (callback, arr = []) => {
    if(arr.length === 10) {
        console.log(arr);
        return;
    }
    callback(rand => {
        arrayOfRand(callback, [...arr, rand])
    })
}
// arrayOfRand(giveRandAsync);

//======> subtask 2
// Call function 'giveRandAsync' 10 times, one at a time, and average the results.
const asyncAvarge = (giveRandAsync, sum = 0, i = 0) => {
    if(i === 10) {
        console.log(sum / 10)
        return;
    }    
    giveRandAsync(rand => {
        asyncAvarge(giveRandAsync, sum + rand, i + 1)
    })
}
// asyncAvarge(giveRandAsync);

//======> subtask 3
//Call function 'giveRandAsync' 10 times, one at a time with 20 second interval, and average the results.
const asyncAvargeWithDelay = (callback, sum = 0, i = 0) => {
    const f = (callback, sum = 0, i = 0) => {
        if(i === 10) {
            console.log(sum / 10);
            return;
        } 
        callback(rand => {
            asyncAvargeWithDelay(callback, sum + rand, i + 1)
        })
    }
    setTimeout(f, 1990, callback, sum, i)
}
// asyncAvargeWithDelay(giveRandAsync);

//======> subtask 4
// Call function 'giveRandAsync' 10 times, all at once, and average the results.

const promiseAll = (array, i = array.length - 1, newArray = []) => {
    if(i === -1) {
        console.log('array is ->', newArray);
        console.log('result is ->', newArray.reduce((a, b) => a + b) / 10);
        return;
    }
    array[i].then(res => {
        promiseAll(array, i - 1, [...newArray, res]);
    })
}

const allAtOnce = (callback, arr = []) => {
    if(arr.length === 10) {
        return  arr;
    }
    return allAtOnce(callback, [...arr, new Promise(resolve => {
        callback(rand => resolve(rand));
    })])
}
promiseAll(allAtOnce(giveRandAsync));
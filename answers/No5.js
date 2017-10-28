const giveRandAsync = callback => {
    const f = () => callback(Math.random())
    setTimeout(f, 10)
}
//======> task 1
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

//======> task 2
const asyncAvarge = (callback, sum = 0, i = 0) => {
    if(i === 10) console.log(sum / 10)
    callback(rand => {
        asyncAvarge(callback, sum + rand, i + 1)
    })
}
// asyncAvarge(giveRandAsync);

//======> task 3
const asyncAvargeWithDelay = (callback, sum = 0, i = 0) => {
    const f = (callback, sum = 0, i = 0) => {
        console.log(`callback is in f ${callback.name}`)
        if(i === 10) {
            console.log(sum / 10);
        } else {
            callback(rand => {
            asyncAvargeWithDelay(callback, sum + rand, i + 1)
        })
        }
    }
    setTimeout(f, 190, callback, sum, i)
}
asyncAvargeWithDelay(giveRandAsync)
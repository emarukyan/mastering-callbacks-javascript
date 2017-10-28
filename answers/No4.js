const giveTrueIf4Async = (arg, callback) => {
    const result = arg === 4
    const f = () => callback(result)
    setTimeout(f, 10)
}
const array = [2, 3, 4, 5, 6, 7, 8];
const callAsync = (callback, arr, i = 0) => {
    callback(arr[i], result => {
        console.count(callback.name)
        if(!result) {
            callAsync(callback, arr, i + 1)
        } else {
            console.log(`out on ${i}`)
        }
    })
}
callAsync(giveTrueIf4Async, array);
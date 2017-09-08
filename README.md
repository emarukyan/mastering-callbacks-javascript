#Mastering Callbacks!

General limitations.
-Read this first http://eloquentjavascript.net/05_higher_order.html
-You are not allowed to change input variable of a any function.
-You are allowed to use only 'const' for declaring variables and functions.
-You are not allowed to use any of ++ or -- operators.
-You are not allowed to use 'delete' operator
-You are not allowed to use .shift, .splice or any function that mutates an array in place.
* First write without limitations, then refactor code to match limitations

//////////////////////////////////////////////////////////
1. Write a function that accepts another function as an argument and call that function passing a number

//////////////////////////////////////////////////////////
2. Assume you have function
const giveRand = callback => {
  callback(Math.random())
}

// TASK
Write a function that calls function 'giveRand' 10 times and averages the results.

//////////////////////////////////////////////////////////
3. Assume you have a function and an array
const f = (argument, callback) => {
  if (argument === 4) {
    callback(false)
    return
  }
  callback(true)
}

const array = [2, 3, 4, 5, 6, 7, 8]

// TASK
Write a function that calls function 'f' for each element of an array,
starting from the first one, and if callback receives 'true', stop calling 'f'

Async Callbacks, setTimeout, setInterval
//////////////////////////////////////////////////////////
4. Assume you have an async function and an array
const giveTrueIf4Async = (arg, callback) => {
  const result = arg === 4
  const f = () => callback(result)
  setTimeout(func, 10)
}
const array = [2, 3, 4, 5, 6, 7, 8]

// TASK
Write a function that calls function 'giveTrueIf4Async' for each element of an array,
one at a time, starting from the first one, and if callback receives 'true',
stop calling 'giveTrueIf4Async'

//////////////////////////////////////////////////////////
5. Assume you have async function, that give random numbers to callback
const giveRandAsync = callback => {
  const f = () => callback(Math.random())
  setTimeout(func, 10)
}

// TASK
Call function 'giveRandAsync' 10 times and gather results in an array
Call function 'giveRandAsync' 10 times, one at a time, and average the results
Call function 'giveRandAsync' 10 times, one at a time with 20 second interval, and average the results
Call function 'giveRandAsync' 10 times, all at once, and average the results

//////////////////////////////////////////////////////////
## Super Dudes
// TASK
Write your own implementation of async.waterfall function
Write your own implementation of async.parallel function

//////////////////////////////////////////////////////////
## Promises
// TASK
Write your own implementation of bluebird's functions.
Promise.map
Promise.all
Promise.each
Promise.tap
Promise.thenReturn

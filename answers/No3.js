const f = (argument, callback) => {
    if (argument === 4) {
      callback(false)
      return
    }
    callback(true)
  }
    
    const array = [2, 3,  5, 6, 7, 4, 8];
    
    const foo = (callback, arr, i = 0,) => {
        console.log(`index is ${i}`);
        if(!arr[i]) return;
        callback(arr[i], bool => {
            if(bool) {
                foo(callback, arr, i + 1)
            } else {
              console.log(`out on ${i}`);
            }
        })
    }
    foo(f, array)
const giveRand = callback => {
    callback(Math.random())
  }
  const averge = (giveRand, sum = 0, i = 0) => {
    if (i === 10) {
      console.log(sum / i);
      return;
    }
    giveRand((rand) => {
      averge(giveRand, sum + rand, i + 1)
    });
     
  }
  averge(giveRand);
  
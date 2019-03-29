function highAndLow(numbers){
    
    // Split string into numbers
    let numbersSplit = numbers.split(" ");
    let counter = 1;
    let lowest;
    let highest;

    for (number of numbersSplit){
        let numberInt = parseInt(number);

        if (counter === 1){
            lowest = numberInt;
            highest = numberInt;
            counter = 0;
        }
        // find the highest
        if (numberInt > highest){
            highest = numberInt;
        };

        // find the lowest
        if (numberInt < lowest){
            lowest = numberInt;
        }
    }
    return (highest + " " + lowest);
  }

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
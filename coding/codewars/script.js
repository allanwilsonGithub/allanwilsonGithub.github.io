function highAndLow(numbers){
    
    // Split string into numbers
    let numbersSplit = numbers.split(" ");

    let lowest = 1;
    let highest = 1;
    let counter = 1;

    for (number of numbersSplit){
        let numberInt = parseInt(number);
        console.log(numberInt);
        console.log("Counter is: " + counter);

        if (counter === 1){
            let lowest = numberInt;
            let highest = numberInt;
            counter = 0;
            console.log("Numbers start at: " + highest + " and " + lowest);
        }

        // find the highest
        if (numberInt > highest){
            highest = numberInt;
            console.log("This shouldn't trigger");
        };

        // find the lowest
        if (numberInt < lowest){
            lowest = numberInt;
        }
    }
    return (highest + " " + lowest);
  }

console.log(highAndLow("-1 -1"));
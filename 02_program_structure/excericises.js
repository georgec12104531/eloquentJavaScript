
//print stars 
function printStars(peak) {
  for (let i = 1; i <= peak; i++) {
    console.log(("*").repeat(i));
  }
  for (let i = peak - 1; i >= 1; i--) {
    console.log(("*").repeat(i));
  }
}

//fizzbuzz

fizzBuzz = () => {
  for (let i = 0; i <= 100; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz()

printStars(5);

//print chessboard 

printChess = (num) => {
  let currentRow;
  for (let i = 0; i < num; i++) {
    let currentRow = "";
    for (let j = 0; j < num; j++) {
      //if the column is even, start space
      if (i % 2 === 0) {
        //starting with space 
        if (j % 2 === 0) {
          currentRow += " ";
        } else {
          currentRow += "#";
        }
       // if the column is odd, start with # 
      } else {
         if (j % 2 === 0) {
          currentRow += "#";
        } else {
          currentRow += " ";
        }
      }
    }
    //print out the currentRow before it resets
    console.log(currentRow);
  }
}


console.log(printChess(8));

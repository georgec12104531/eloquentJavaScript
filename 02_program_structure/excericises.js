
//print stars 
function printStars(peak) {
  for (let i = 1; i <= peak; i++) {
    console.log(("*").repeat(i));
  }
  for (let i = peak - 1; i >= 1; i--) {
    console.log(("*").repeat(i));
  }
}

printStars(5);


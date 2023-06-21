function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Please enter a valid Number !";
  }

  let calculate = number - 7;
  if (calculate >= 7) {
    let DoubleNumber = number * 2;
    return DoubleNumber;
  } else {
    return calculate;
  }
}

// isLGSeven(15);
const isLG = isLGSeven(-15);
console.log(isLG);

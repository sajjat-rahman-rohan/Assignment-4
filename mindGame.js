function mindGame(number) {
  if (number < 0) {
    return "Please enter a valid Number !";
  }

  let result = (number * 3 + 10) / 2 - 5;

  return result;
}

// mindGame(5);
const number = mindGame(-50);
console.log(number);

// ****************** 1:- Problem Mind-Game ***********************
/* A function is created by multiplying a positive 
number by 3, then adding 10, then dividing by 2, then subtracting 5. */

function mindGame(number) {
  if (number < 0) {
    return "Please enter a valid positive Number !";
  }

  let result = (number * 3 + 10) / 2 - 5;

  return result;
}
// mindGame(5);

//  ************* 2:- Problem Finding even or odd *****************
/* Based on the total number of characters in a String, 
it will be determined whether that number is even or odd  */

function evenOdd(str) {
  if (typeof str !== "string") {
    return "Warning! Please Enter a string";
  }

  let length = str.length;
  if (length % 2 == 0) {
    let even = "even";
    return even;
  } else {
    let odd = "odd";
    return odd;
  }
}
// evenOdd("chatgpt");

//  ******** 3:- Problem Is Less or Greater than seven **************
/* Differentiates a number by 7. If the number is less than 7, 
 only that number will be returned, and if it is greater than 7,
 the number will be doubled. */

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

//  *********************** 4:- Problem Finding Bad data ****************************
/* Counts how many negative numbers/Bad Data (less than zero) and how many
 positive numbers/Good data (greater than or equal to zero) there are in a number
 array, then only the total number of negative numbers(Bad data) will be calculated */

function findingBadData(numbers) {
  if (typeof numbers !== "object") {
    return "Warning! Please enter a Array";
  }

  let goodData = 0;
  let badData = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      badData++;
    } else {
      goodData++;
    }
  }

  return badData;
}
// findingBadData([-4, -9, -5, -33, -55]);

//  ************ 5:- Problem Convert your gems into diamond ******************
/* Multiply 21, 32 and 43 by the number of gems of 3 friends.
 If diamonds are greater than 2000 -2000 is total diamonds and
 if less than 2000 this number is total diamonds. */
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  if (
    typeof firstFriend !== "number" ||
    typeof secondFriend !== "number" ||
    typeof thirdFriend !== "number"
  ) {
    return "Please enter a valid Number !";
  }

  const firstFriendGem = 21;
  const secondFriendGem = 32;
  const ThirdFriendGem = 43;

  const firstFriendDiamond = firstFriend * firstFriendGem;
  const secondFriendDiamond = secondFriend * secondFriendGem;
  const thirdFriendDiamond = thirdFriend * ThirdFriendGem;

  const totalDiamond =
    firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

  if (totalDiamond >= 1000 * 2) {
    let remainingDiamond = totalDiamond - 2000;
    return remainingDiamond;
  } else {
    return totalDiamond;
  }
}
// gemsToDiamond(100, 5, 1);

// function findingBadData(num) {
//   let i = 0;
//   let badData = 0;
//   let count = 0;
//   for (i = 0; i < num.length; i++) {
//     if (num[i] >= 0) {
//       count++;
//     } else {
//       badData++;
//     }
//   }
//   return badData;
// }

function mindGame(number) {
  if (number < 0) {
    return "Please enter a valid positive Number !";
  }
  let result = (number * 3 + 10) / 2 - 5;
  console.log(result);
  return result;
}

mindGame(5);

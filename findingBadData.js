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
let allData = [-4, -9, -5, -33, 55];
let dataCall = findingBadData(allData);
console.log(dataCall);

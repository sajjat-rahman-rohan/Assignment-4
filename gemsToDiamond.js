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
const totalDiamond = gemsToDiamond(100, 5, 1);
console.log(totalDiamond);

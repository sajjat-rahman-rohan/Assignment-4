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
const oddEven = evenOdd("chatgpt");
console.log(oddEven);

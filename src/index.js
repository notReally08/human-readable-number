const readable = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred"
}
module.exports = function toReadable (number) {
  if(number === 0) {
    return "zero";
  }
  if(number < 20) {
    return readable[number] //196
  }
  let res = "";
  const str = number.toString();
  const arr = str.split("");
  let arrToClear = [...arr];
  
  for(let i = 0; i < arr.length; i++) {
    let checker = Math.pow(10, arrToClear.length - 1);
    let currNum = Number.parseInt(arrToClear.join(""));
    if(arrToClear.length > 2) {
      res += ` ${readable[arr[i]]} ${readable[checker]}`;
      arrToClear.shift();
      continue;
    }
    if(+arr[i] === 0) {
      arrToClear.shift();
      continue;
    }
    if(currNum / checker === 1 && currNum !== 10) {
      if(i === arr.length - 1) {
        res += ` ${readable[arr[i]]}`;
      }
      break;
    }
    if (i === arr.length - 1 || currNum < 20) {
      res += ` ${readable[currNum]}`; 
      break;
    } else {
      res += ` ${readable[currNum - (+arrToClear[arrToClear.length - 1])]}`
    }
    arrToClear.shift();
  }
  return res.trim()
}

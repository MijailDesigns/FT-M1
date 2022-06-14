'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += Number(num[i]) * Math.pow(2, num.length - i - 1);
    
  }
  return result;

}

function DecimalABinario(num) {
  // tu codigo aca
  let result = [];
  while (num > 0) {
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
      result.unshift("0");
    } else {
      num = Math.floor(num / 2);
      result.unshift("1");
    }
  }
  return result.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
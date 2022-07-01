module.exports = function reverse (n) {
  let number = n.toString();
  let reversedNumber = '';

  if (number[0] === '-') { number = number.slice(1); }

  for (let i = 0; i < number.length; i++) {
    reversedNumber = `${number[i]}${reversedNumber}`;
  }

  return Number(reversedNumber);
}

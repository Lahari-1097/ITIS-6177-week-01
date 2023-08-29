function findEvenOddNumbers(start, end) {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }

  return { even: evenNumbers, odd: oddNumbers };
}

const startRange = 1;
const endRange = 20;

const { even, odd } = findEvenOddNumbers(startRange, endRange);

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
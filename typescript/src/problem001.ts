/*
 * Problem 1
   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
   The sum of these multiples is 23.
   Find the sum of all the multiples of 3 or 5 below 1000.
*/

namespace Problem001 {
  const calcList = (targetNumber: number): number[] => {
    const allNumberList = Array.from(Array(targetNumber).keys());
    return allNumberList.filter((item) => item % 3 === 0 || item % 5 === 0);
  };

  const input = 1000;
  const targetList = calcList(input);
  const sum = targetList.reduce((acc, item) => {
    return acc + item;
  }, 0);

  console.log('Problem001, 合計 : ', sum);
}

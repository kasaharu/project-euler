/*
 Problem 5

 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

namespace Problem005 {
  let value = 20;
  let dividers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  let check = false;

  while (!check) {
    value = value + 20;
    check = dividers.every((divider) => value % divider === 0);
  }

  console.log('Problem005, 合計 : ', value);
}

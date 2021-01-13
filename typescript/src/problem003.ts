/*
 Problem 3
 The prime factors of 13195 are 5, 7, 13 and 29.
 
 What is the largest prime factor of the number 600851475143 ?
*/

namespace Problem003 {
  const isPrimeNumber = (num: number): boolean => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let target = 600851475143;
  let factor = 2;

  while (!isPrimeNumber(target)) {
    if (target % factor === 0) {
      target = target / factor;
    } else {
      factor++;
    }
  }

  console.log('Problem003, 合計 : ', target);
}

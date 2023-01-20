/*
 *  index.ts
 *  Project: First Exercise
 *
 *  Author: Lainey Dillon
 *  Created on: Jan 19, 2023
 */
// merge array part 1 and 2
function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const mergedArray: Array<number> = [];
  let shortArray: Array<number> = arr1;
  let longArray: Array<number> = arr2;
  let i: number = 0;
  if (arr1.length > arr2.length) {
    shortArray = arr2;
    longArray = arr1;
  }
  for (; i < shortArray.length; i += 1) {
    mergedArray.push(arr1[i]);
    mergedArray.push(arr2[i]);
  }
  for (; i < longArray.length; i += 1) {
    mergedArray.push(longArray[i]);
  }
  return mergedArray;
}

const array1: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array2: Array<number> = [18, 74, 88, 3];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);
// wordle
function checkWord(attWord: string, secWord: string): string {
  let correctness: string = '';
  for (let i = 0; i < 5; i += 1) {
    if (attWord[i] === secWord[i]) {
      correctness = correctness.concat('', 'c');
    } else if (secWord.includes(attWord[i])) {
      correctness = correctness.concat('', 'p');
    } else correctness = correctness.concat('', 'a');
  }
  return correctness;
}
const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}
// candidates
type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const underwood: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};
const olson: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};
const willis: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};
const taylor: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317927937,
};
function sum(arr1: Array<number>): number {
  for (let i: number = 0; i < arr1.length; i += 1) {
    let total: number = 0;
    total += arr1[i];
  }
  return total;
}

const candidates: Array<Candidate> = [underwood, olson, willis, taylor];
const sums: Array<number> = [];
for (let i: number = 0; i < candidates.length; i += 1) {
  sums.push(sum(candidates[i].votes));
}
const totalVotes: number = sum(sums);
for (let i: number = 0; i < sums.length; i += 1) {}

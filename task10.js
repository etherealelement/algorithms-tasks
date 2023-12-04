"use strict"

const spoonerize = (words) => {
    const firstWordsIndexes =   words.split(" ");
    let firstLetter = firstWordsIndexes[0][0];
    let secondLetter = firstWordsIndexes[1][0];


    return secondLetter + firstWordsIndexes[0].slice(1) + " " + firstLetter + firstWordsIndexes[1].slice(1)

}

console.log(spoonerize("1V9Trup7vBG BVTQf4OOwNAK"))
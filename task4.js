const mispelled = (word1, word2) => {
    let count = 0;

    let s1 = 0;
    let s2 = 0;

    while(s1 <= word1.length - 1 && s2 < word2.length) {
        console.log(word1[s1])
        if(word1[s1] !== word2[s2]) {
            count++

            s1++;
            s2++;
        }
        s1++;
            s2++;
    } 
    return count;
}


console.log(mispelled("versed", "versed1"));
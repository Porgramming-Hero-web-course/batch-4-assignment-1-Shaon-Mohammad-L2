"use strict";
{
    //
    const countWordOccurrences = (sentence, word) => {
        const lowerCaseSentence = sentence.toLocaleLowerCase().split(" ");
        const lowerCaseWord = word.toLocaleLowerCase();
        const count = lowerCaseSentence.filter((word) => word === lowerCaseWord);
        return count.length;
    };
    const result = countWordOccurrences("I love Typescript", "typescript");
    console.log(result);
    //
}

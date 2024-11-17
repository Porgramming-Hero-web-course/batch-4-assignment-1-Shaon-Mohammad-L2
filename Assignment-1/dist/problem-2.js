"use strict";
{
    //
    const removeDuplicates = (numbers) => {
        const removeNumber = numbers.filter((number, i) => numbers.indexOf(number) === i);
        return removeNumber;
    };
    const output = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(output);
    //
}

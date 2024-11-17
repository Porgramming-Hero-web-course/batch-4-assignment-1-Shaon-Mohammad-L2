{
  //

  // const sumArray = (...numbers : number[]) : number  =>{
  //     const sum = numbers.reduce((sum, number)=> sum+number, 0);
  //     return sum
  // }

  // const output =  sumArray(1, 2, 3, 4, 5);

  const sumArray = (numbers: number[]): number => {
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  };

  const output = sumArray([1, 2, 3, 4, 5]);
  console.log(output);

  //
}

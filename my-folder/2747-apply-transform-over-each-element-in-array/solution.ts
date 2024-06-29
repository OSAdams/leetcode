function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const solutionArray = [];
    for (let i = 0; i < arr.length; i++) {
        solutionArray.push(fn(arr[i], i))
    }
    return solutionArray;
};

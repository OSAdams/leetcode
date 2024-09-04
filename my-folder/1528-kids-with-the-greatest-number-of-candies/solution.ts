function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = [];
    let candiesIndex: number = 0;
    const candiesLength: number = candies.length;
    while (candiesIndex < candiesLength) {
        let isMostCandies: boolean = false;
        let totalCandies: number = candies[candiesIndex] + extraCandies;
        for (let i = 0; i < candiesLength; i++) {
            if (totalCandies >= candies[i]) {
                isMostCandies = true;
            } else {
                isMostCandies = false;
                break;
            }
        }
        result.push(isMostCandies);
        candiesIndex++
    }
    return result;
    /* 
        const max = Math.max(...candies);
        return candies.map((candyNum) => candyNum + extraCandies >= max);
    */
};

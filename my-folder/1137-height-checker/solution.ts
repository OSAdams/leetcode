function heightChecker(heights: number[]): number {
    let differences = 0;
    const sortedHeights = [...heights].sort((a,b) => (a-b));
    for (let i = 0; i < sortedHeights.length; i ++) {
        if (heights[i] != sortedHeights[i]) {
            differences++
        }
    }
    return differences;
};

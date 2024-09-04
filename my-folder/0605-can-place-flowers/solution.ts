function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let noAdjacent: number = 0;
    flowerbed.forEach((value, index) => {
        const prev: number = index - 1;
        const next: number = index + 1
        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            noAdjacent++;
            flowerbed[index] = 1;
        }
    })
    return noAdjacent >= n;
};

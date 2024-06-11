function uniqueOccurrences(arr: number[]): boolean {
    const hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
    }
    const solution = Array.from(hashMap.values());
    return new Set(solution).size === solution.length;
};

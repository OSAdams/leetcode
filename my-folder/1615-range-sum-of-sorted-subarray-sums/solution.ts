function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const mod = 1e9 + 7;
    const minHeap: number[] = [];

    // Calculate subarray sums and store them in an array
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            minHeap.push(sum);
        }
    }
    
    // Convert the array into a sorted array (acting as a min-heap)
    minHeap.sort((a, b) => a - b);
    
    // Calculate the range sum for the desired range
    let rangeSum = 0;
    for (let i = left - 1; i < right; i++) {
        rangeSum = (rangeSum + minHeap[i]) % mod;
    }
    
    return rangeSum;
};

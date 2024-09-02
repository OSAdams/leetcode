function climbStairs(n: number): number {
    const steps: number[] = new Array(n + 1).fill(0);
    if (n >= 0) steps[0] = 1;
    if (n >= 1) steps[1] = 1;
    for (let i = 2; i <= n; i++) 
        steps[i] = steps[i-1] + steps[i-2];
    return steps[n];
};

function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let element of nums) {
        if (element !== val) {
            nums[k] = element;
            k++;
        }
    }
    return k;
};

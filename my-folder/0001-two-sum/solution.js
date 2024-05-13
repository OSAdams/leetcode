/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]
        if (difference in hash) return [i, hash[difference]]   
        hash[nums[i]] = i;
    }
};

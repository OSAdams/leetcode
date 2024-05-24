/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Pointer = m - 1;
    let nums2Pointer = n - 1;
    let currentPointer = m + n - 1;
    while (nums2Pointer >= 0) {
        if (nums1Pointer >= 0 && nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums1[currentPointer--] = nums1[nums1Pointer--]
        } else {
            nums1[currentPointer--] = nums2[nums2Pointer--]
        }
    } 
};

/**Encuentra el mínimo en un array rotado */
function findMin(nums: number[]): number {
    return nums[nums.findIndex((x, i) => x > nums[i + 1]) + 1];
};
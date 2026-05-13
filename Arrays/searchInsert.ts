function searchInsert(nums: number[], target: number): number {

    let left = 0;
    let right = nums.length - 1
    let mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return target > nums[mid] ? mid + 1 : mid;

};
function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let isSolution = (nums[i] + nums[j]) == target;
            if (isSolution) {
                result = [i, j]
                break;
            }
        }
    }

    return result;
};
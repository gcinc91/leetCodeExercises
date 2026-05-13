function searchMatrix(matrix: number[][], target: number): boolean {

    for (let i = 0; i < matrix.length; i++) {

        let left = 0;
        const nums = matrix[i];
        let right = nums.length - 1

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) return true;


            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

    }


    return false;

};
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1


    while (right >= left) {

        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        // Determina cuál mitad está ordenada
        if (nums[left] <= nums[mid]) {
            // Mitad izquierda está ordenada
            if (nums[left] <= target && target < nums[mid]) {
                // Target está en la mitad izquierda ordenada
                right = mid - 1;
            } else {
                // Target está en la mitad derecha (posiblemente rotada)
                left = mid + 1;
            }
        } else {
            // Mitad derecha está ordenada
            if (nums[mid] < target && target <= nums[right]) {
                // Target está en la mitad derecha ordenada
                left = mid + 1;
            } else {
                // Target está en la mitad izquierda (posiblemente rotada)
                right = mid - 1;
            }
        }
    }

    return -1
};
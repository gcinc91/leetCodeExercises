function maxArea(height: number[]): number {

    let left = 0;
    let right = height.length - 1;
    let res = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            let area = height[left] * (right - left);
            res = Math.max(area, res);
            left++
        } else {
            let area = height[right] * (right - left);
            res = Math.max(area, res)
            right--
        }
    }

    return res;
};
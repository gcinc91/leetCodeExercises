class NumArray {
    list: number[];
    p: number[];
    constructor(nums: number[]) {
        this.list = nums;
        let bef = 0;
        this.p = nums.map(x => bef += x);
    }

    sumRange(left: number, right: number): number {
        return this.p[right] - (this.p[left - 1] || 0)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
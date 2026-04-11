function findDuplicate(nums: number[]): number {
    const t = {}
    for (const n of nums) {
        if (t[n]) {
            return n
        } else {
            t[n] = 1
        }
    }
};
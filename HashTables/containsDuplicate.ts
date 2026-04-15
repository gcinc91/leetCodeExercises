function containsDuplicate(nums: number[]): boolean {

    const s = new Set(nums);
    return !(s.size == nums.length)

};
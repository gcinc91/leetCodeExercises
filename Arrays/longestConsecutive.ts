function longestConsecutive(nums: number[]): number {

    if (nums.length === 0) return 0;
    const orderedList = [...new Set(nums.toSorted((a, b) => a - b))]
    let temp = 1;
    let max = 0;

    for (let i = 0; i < orderedList.length; i++) {
        if (orderedList[i] + 1 === orderedList[i + 1]) {
            temp += 1
            max = max > temp ? max : temp;
        } else {
            temp = 1
        }
    }

    return max ? max : 1;
};
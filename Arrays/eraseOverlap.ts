function eraseOverlapIntervals(intervals: number[][]): number {

    let count = 0;
    const merged = [];
    const sortedIntervals = intervals.toSorted((a, b) => a[0] - b[0]);

    merged.push(sortedIntervals[0]);

    for (let i = 1; i < sortedIntervals.length; i++) {

        if (merged[merged.length - 1][1] > sortedIntervals[i][0]) {
            count++
            if (merged[merged.length - 1][1] > sortedIntervals[i][1]) {
                merged[i - 1] = sortedIntervals[i]
                continue;
            } else {
                continue;
            }
        }
        merged.push(sortedIntervals[i])

    }

    return count;

};
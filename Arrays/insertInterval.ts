function insert(intervals: number[][], newInterval: number[]): number[][] {

    const merged = [];
    intervals.push(newInterval);
    const sortedIntervals = intervals.toSorted((a, b) => a[0] - b[0]);

    merged.push(sortedIntervals[0]);

    for (let i = 1; i < sortedIntervals.length; i++) {

        if (
            merged[merged.length - 1][1] >= sortedIntervals[i][0] &&
            merged[merged.length - 1][1] < sortedIntervals[i][1]
        ) {
            merged[merged.length - 1][1] = sortedIntervals[i][1]
            continue;
        } else if (
            merged[merged.length - 1][1] >= sortedIntervals[i][0] &&
            merged[merged.length - 1][1] >= sortedIntervals[i][1]
        ) {
            continue;
        } else {
            merged.push(sortedIntervals[i])
            continue;
        }

    }

    return merged;

};
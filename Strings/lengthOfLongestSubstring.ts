function lengthOfLongestSubstring(s: string): number {

    if (!s.length) return 0;
    const list = s.split('');
    const values = [...new Set(list)]
    if (values.length == 1) return 1;
    let subs: string[] = [];
    let max = 1;

    for (let i = 0; i < list.length; i++) {

        let next = i
        while (!subs.some(e => e === list[next])) {
            if (!list[next]) break;
            subs.push(list[next]);
            next++
        };

        max = subs.length > max ? subs.length : max;
        subs = [];
    }
    return max;
};
function isAnagram(s: string, t: string): boolean {
    let sList = s.split('').sort();
    let tList = t.split('').sort();

    return JSON.stringify(sList) === JSON.stringify(tList)
};
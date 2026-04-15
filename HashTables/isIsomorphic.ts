function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) return false;

    const hashS = {}
    const hashT = {}
    for (let i = 0; i < s.length; i++) {

        if (hashS[s[i]]) {
            if (hashS[s[i]] != t[i]) {
                return false
            }
        }
        if (hashT[t[i]]) {
            if (hashT[t[i]] != s[i]) {
                return false
            }
        }

        hashS[s[i]] = t[i]
        hashT[t[i]] = s[i]
    }

    return true;
};
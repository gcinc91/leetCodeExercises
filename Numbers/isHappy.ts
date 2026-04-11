function isHappy(n: number): boolean {
    const t = {}
    let digits = `${n}`.split('');
    let sum = digits.reduce((acc, curr) => acc + Number(curr) ** 2, 0);

    while (sum != 1) {
        if (t[sum]) {
            return false
        } else {
            t[sum] = 1
        }

        digits = `${sum}`.split('');
        sum = digits.reduce((acc, curr) => acc + Number(curr) ** 2, 0);
    }

    return sum == 1
};
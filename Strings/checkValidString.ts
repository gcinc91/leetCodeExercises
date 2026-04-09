function checkValidString(s: string): boolean {
    let minOpen = 0;
    let maxOpen = 0;

    for (const c of s) {
        if (c === '(') {
            minOpen++;
            maxOpen++;
        } else if (c === ')') {
            minOpen--;
            maxOpen--;
        } else { // '*'
            minOpen--;
            maxOpen++;
        }

        if (maxOpen < 0) return false;
        minOpen = Math.max(0, minOpen);
    }

    return minOpen === 0;
};
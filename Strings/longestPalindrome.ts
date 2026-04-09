function longestPalindrome(s: string): string {

    let start = 0;
    let maxLen = 1;

    // Expande desde el centro y devuelve la longitud del palíndromo
    const expandFromCenter = (left: number, right: number): void => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const len = right - left + 1;
            if (len > maxLen) {
                start = left;
                maxLen = len;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Caso impar: centro en s[i]
        expandFromCenter(i, i);

        // Caso par: centro entre s[i] y s[i+1]
        expandFromCenter(i, i + 1);
    }

    return s.substring(start, start + maxLen);

};
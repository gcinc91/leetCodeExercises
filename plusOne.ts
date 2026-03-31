function plusOne(digits: number[]): number[] {
    return `${BigInt(digits.join('')) + BigInt(1)}`.split('').map(x => +x)
};
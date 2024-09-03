function gcdOfStrings(str1: string, str2: string): string {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    if (str1 + str2 !== str2 + str1) {
        return '';
    };
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
};

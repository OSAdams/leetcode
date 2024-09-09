function isPalindrome(s: string): boolean {
    const cleanStr: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reversed: string = cleanStr.split('').reverse().join('').toLowerCase()
    return cleanStr === reversed;
};

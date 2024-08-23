function plusOne(digits: number[]): number[] {
    const joinedDigits: BigInt = BigInt(digits.join('')) + BigInt(1);
    const stringedDigits: string[] = joinedDigits.toString().split('');
    const result: number[] = stringedDigits.map(Number)
    return result;
};

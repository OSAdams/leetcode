function lengthOfLastWord(s: string): number {
    const splitParameter: string[] = s.split(' ');
    for (let i = splitParameter.length - 1; i >= 0; i--) {
        if (Boolean(splitParameter[i])) return splitParameter[i].length;
    }
};

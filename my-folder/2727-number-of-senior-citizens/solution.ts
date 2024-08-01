function countSeniors(details: string[]): number {
    // let result: number = 0;
    // for (let person of details){
    //     if(+person.substring(11,13) > 60) result += 1
    // }
    // return result;
    let numberOfPassengers: number = 0;
    for (let i = 0; i < details.length; i++) {
        if (Number(details[i].slice(11, 13)) > 60) numberOfPassengers++;
    }
    return numberOfPassengers;
    // return details.filter((person) => +(person[11] + person[12]) > 60).length
};

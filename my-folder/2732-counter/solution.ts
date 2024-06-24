function createCounter(n: number): () => number {
    let incrementedArgument: number = n;
    return function() {
        return incrementedArgument++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

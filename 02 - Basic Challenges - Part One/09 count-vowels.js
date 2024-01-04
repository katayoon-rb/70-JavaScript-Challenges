function countVowels(str) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        const char = str.toLowerCase()[i]
        if ( char === 'a' || char === 'e' ||
             char === 'i' || char === 'o' ||
             char === 'u' )
            { count++ }
    }
    return count
}
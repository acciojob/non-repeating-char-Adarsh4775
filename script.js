
function firstNonRepeatedChar(s) {
    // Create a HashMap to store character counts
    const charCountMap = new Map();

    // Iterate through the string to count character occurrences
    for (const char of s) {
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char) + 1);
        } else {
            charCountMap.set(char, 1);
        }
    }

    // Iterate through the string to find the first non-repeated character
    for (const char of s) {
        if (charCountMap.get(char) === 1) {
            return char;
        }
    }
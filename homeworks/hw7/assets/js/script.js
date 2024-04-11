function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let result = sum / 3;
    return result;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.random() * max;
}

// Declare variables x, y, and z with return values from getRandomNum
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

// Calculate average of x, y, and z
let avg = averageThreeNumbers(x, y, z);

// Construct sentence using createSentence function
let sentence = createSentence(avg, "penguins");

// Log the sentence to the console
console.log(sentence);
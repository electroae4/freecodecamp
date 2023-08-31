let sampleWord = "astronaut";
let pwRegex = /[a-z]{2,}(?=\w)(?=\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
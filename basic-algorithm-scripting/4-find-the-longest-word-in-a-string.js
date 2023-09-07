function findLongestWordLength(str) {
  let maxLength = 0;
  str.split(' ').forEach(el => {
    if (el.length > maxLength) maxLength = el.length;
  })
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
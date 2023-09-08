function titleCase(str) {
  str = str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  return str;
}

titleCase("I'm a little tea pot");
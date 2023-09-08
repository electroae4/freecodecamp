function bouncer(arr) {
  let new_arr = [];
  for (let i of arr) {
    if (!!i) new_arr.push(i)
  }
  return new_arr;
}

bouncer([7, "ate", "", false, 9]);
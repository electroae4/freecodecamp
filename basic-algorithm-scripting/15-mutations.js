function mutation(arr) {
  for (let ch of arr[1].toLowerCase()) {
    if (!(arr[0].toLowerCase().includes(ch))) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
function hasUniqueCharacters(str) {
  str.trim()
  let arr = str.split('')
  let hasUniqueCharacters = true
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == arr[i]) {
        hasUniqueCharacters = false
        return hasUniqueCharacters
      }
    }
  }
  return hasUniqueCharacters
}
console.log(hasUniqueCharacters('Bob'))
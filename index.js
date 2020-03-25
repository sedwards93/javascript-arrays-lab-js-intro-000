var kittens = ['Milo','Otis','Garfield']

function destructivelyAppendKitten (kitten) {
  return kittens.push(kitten)
}

function destructivelyPrependKitten (kitten) {
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  return kittens.shift()
}

function appendKitten (name) {
  var newArray = [...kittens];
  newArray.push(name);
  return newArray
}

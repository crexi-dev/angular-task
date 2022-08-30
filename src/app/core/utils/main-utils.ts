export let generateRandomNumber = (range: number = 100, additional: number = 0) => {
  return Math.floor(Math.random() * range) + additional
}

export let selectRandomOptionFromArray = (myArray: Array<any>, index?: number) => {
  return myArray[generateRandomNumber(index ?? myArray.length)]
}
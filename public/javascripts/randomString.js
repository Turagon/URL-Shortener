function isExistedCheck (...dataCollection) {
  let randomResult = randomStringGenerator()
  const allRandomString = dataCollection.map(item => item = item.repliedString)
  while (allRandomString.find(item => item === randomResult)) {
    randomResult = randomStringGenerator()
  }
  return randomResult
}

function randomStringGenerator () {
  const number = '0123456789'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomBase = (number + lowercase + uppercase).split("")
  const randomResult = []
  for (let i = 0; i < 8; i++) {
    const randomOne = randomBase[Math.floor(Math.random() * randomBase.length)]
    randomResult.push(randomOne)
  }
  for (let index = randomResult.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
      ;[randomResult[index], randomResult[randomIndex]] = [randomResult[randomIndex], randomResult[index]]
  }
  return randomResult.reduce((str, item) => {
    return str + item
  }, "")
}

module.exports = isExistedCheck
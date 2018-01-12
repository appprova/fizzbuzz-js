function fizzbuzz(endIndex) {    
  return Array.from({ length: endIndex }, (_, index) => {
    const number = index + 1
    let value = ''

    if (number % 3 == 0) {
      value += 'fizz'
    }

    if (number % 5 == 0) {
      value += 'buzz'
    }

    return value || number
  })
}

module.exports = fizzbuzz;
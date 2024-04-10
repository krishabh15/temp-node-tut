const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))



/*
const {createReadStream} = require('fs');

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 9000,
    encoding: 'utf8'
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000}) // -> controls size of the buffer
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'}) // -> prints the text

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (result) => {
    console.log('the path is wrong')
})
*/
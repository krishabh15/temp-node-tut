const {readFile, writeFile} = require('fs');
// const {readFile, writeFile} = require('fs').promises;
// These objects by default return promises
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


/* getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err)) */

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8') 
        const second = await readFilePromise('./content/second.txt', 'utf8') 
        await writeFilePromise(
            './content/result-mind-grenade.txt', 
            `THIS IS AWESOME: ${first} ${second}`
        )
        console.log(first, second)
    } catch(err){
        console.log(err)
    }
}

start()

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
} */
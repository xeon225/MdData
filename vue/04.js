import thenFs from 'then-fs'

thenFs.readFile('./files/011.txt', 'utf8')
.catch(err => {
    console.log(err);
})
.then(r1 => {
    console.log(r1)
    return thenFs.readFile('./files/02.txt', 'utf8')
})
.then(r2 => {
    console.log(r2)
    return thenFs.readFile('./files/03.txt', 'utf8')
})
.then(r3 => {
    console.log(r3)
})

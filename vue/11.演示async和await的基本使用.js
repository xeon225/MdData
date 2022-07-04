import thenFs from 'then-fs'

console.log('a');
async function getAllFile() {
    console.log('b');
    const r1 = await thenFs.readFile('./files/01.txt', 'utf-8')
    console.log(r1)
    const r2 = await thenFs.readFile('./files/02.txt', 'utf-8')
    console.log(r2)
    console.log('d');
}
getAllFile()
console.log('c');
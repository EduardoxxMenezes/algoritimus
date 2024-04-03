
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


rl.question("qual teu nome?", (ata) => {
    rl.question("qual sua cor favorita", (nao) => {
        let verdades = "feliz!"
        console.log(`seu nome é ${ata}, sua cor favorita de alguma forma é ${nao}`)
        console.log("ou seja, você é ", verdades)
        rl.close()
    })
})

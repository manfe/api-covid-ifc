var fs = require('fs');
const csv = require('csv-parser');
const { Console } = require('console');

const sqlite3 = require('sqlite3').verbose();

// a utilização da inicialização do banco pode ser arquivo ou memória ex:
// 'dados.db' ou ':memory:'
const db = new sqlite3.Database('dados.db');

console.log("Importação iniciada em: " + new Date().toISOString())

let count = 0

fs.createReadStream('dados.csv').pipe(csv({ separator: ';' }))
.on('data', (row) => {

    let keys = Object.keys(row)
    let values = Object.values(row)

    process.stdout.write("Importações: " + count++ + " registros\r");

    db.run("INSERT INTO casos values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", values, (err) => {
        if (err) {
            console.log("Deu erro ao inserir um registro no banco: " + err)
            console.log("Registro com erro: " + count)
            console.log(row)            
        }
    })

})
.on('end', () => {
    console.log("Importação finalizada em: " + new Date().toISOString())
});
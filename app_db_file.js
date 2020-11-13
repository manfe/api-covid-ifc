var fs = require('fs');
const csv = require('csv-parser');
const { Console } = require('console');

const sqlite3 = require('sqlite3').verbose();

// a utilização da inicialização do banco pode ser arquivo ou memória ex:
// 'dados.db' ou ':memory:'
const db = new sqlite3.Database('dados.db');

const express = require('express')
const app = express()
const port = 3000

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

    app.listen(port, () => {
        console.log(`API v1 COVID-IFC rodando em http://localhost:${port}`)
    })
});


app.get('/', (req, res) => {
    db.get('SELECT count(*) as total FROM casos WHERE municipio = "VIDEIRA"', (err, row) => {
        if (err) console.log("Erro ao buscar por cidade: " + err)

        if (row) {
            res.send(row)
        } else {
            res.send("Problema ao consultar os dados.")
        }
    })
    
})
  

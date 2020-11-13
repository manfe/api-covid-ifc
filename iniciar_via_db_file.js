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

app.get('/total-casos', (req, res) => {
    db.get('SELECT count(*) as total FROM casos', (err, row) => {
        if (err) console.log("Erro ao buscar o total de casos: " + err)

        if (row) {
            res.send(row)
        } else {
            res.send("Problema ao consultar os dados.")
        }
    })
    
})

app.get('/total-por-sexo', (req, res) => {
    db.get(`SELECT total_feminino.total as total_feminino, total_masculino.total as total_masculino FROM
            (SELECT count(*) as total FROM casos WHERE sexo = 'FEMININO') as total_feminino
            JOIN 
                (SELECT count(*) as total FROM casos WHERE sexo = 'MASCULINO') as total_masculino
            ON (1 = 1)`, (err, row) => {
        if (err) console.log("Erro ao buscar o total de casos por sexo: " + err)

        if (row) {
            res.send(row)
        } else {
            res.send("Problema ao consultar os dados por sexo.")
        }
    })
    
})

app.listen(port, () => {
    console.log(`API v1 COVID-IFC rodando em http://localhost:${port}`)
})
  

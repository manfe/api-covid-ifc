var fs = require('fs');
const csv = require('csv-parser');
const { Console } = require('console');

const sqlite3 = require('sqlite3').verbose();

// a utilização da inicialização do banco pode ser arquivo ou memória ex:
// 'dados.db' ou ':memory:'
const db = new sqlite3.Database(':memory:');

const express = require('express')
const app = express()
const port = 3000

if (db) {
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS casos (data_publicacao TEXT, recuperados TEXT, data_inicio_sintomas TEXT, data_coleta TEXT, sintomas TEXT, comorbidades TEXT, gestante TEXT, internacao TEXT, internacao_uti TEXT, sexo TEXT, municipio TEXT, obito TEXT, data_obito TEXT, idade TEXT, regional TEXT, raca TEXT, data_resultado TEXT, codigo_ibge_municipio TEXT, latitude TEXT, longitude TEXT, estado TEXT, criterio_confirmacao TEXT, tipo_teste TEXT, municipio_notificacao TEXT, codigo_ibge_municipio_notificacao TEXT, latitude_notificacao TEXT, longitude_notificacao TEXT, classificacao TEXT, origem_esus TEXT, origem_sivep TEXT, origem_lacen TEXT, origem_laboratorio_privado TEXT, nom_laboratorio TEXT, fez_teste_rapido TEXT, fez_pcr TEXT, data_internacao TEXT, data_entrada_uti TEXT, regional_saude TEXT, data_evolucao_caso TEXT, data_saida_uti TEXT, bairro TEXT, obs TEXT)");
    });
}

console.log("Importação iniciada em: " + new Date().toISOString())

let count = 0

fs.createReadStream('dados.csv').pipe(csv({ separator: ';' }))
.on('data', (row) => {
    // let fixed_row = Object.values(row).join(',');
    // console.log(row)

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
  

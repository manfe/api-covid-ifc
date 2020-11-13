var Client = require('ftp');
var fs = require('fs');
const csv = require('csv-parser');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dados.db');

var c = new Client();

c.on('ready', function() {
  c.get('boavista_covid_dados_abertos.csv', function(err, stream) {
    if (err) throw err;
    stream.once('close', function() { c.end(); });
    stream.pipe(fs.createWriteStream('dados.csv'));
  });
});

// Conecta ao FTP da ciasc para baixar toda a base de dados.
// ftp://boavista:dados_abertos@ftp2.ciasc.gov.br/boavista_covid_dados_abertos.csv
c.connect({
    host: 'ftp2.ciasc.gov.br',
    user: 'boavista',
    password: 'dados_abertos'
});
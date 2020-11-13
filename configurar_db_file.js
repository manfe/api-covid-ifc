// ESSE ARQUIVO BASICAMENTE CONFIGURA A ESTRUTURA DO BANCO DE DADOS
// HAVERÁ APENAS UMA TABELA QUE SERIA "CASOS", ONDE AS COLUNAS REFLETEM AS COLUNAS DO ARQUIVO FORNECIDO PELO CSV.

/* EXEMPLO DA ESTRUTURA EM JSON
    {
        data_publicacao: '2020-11-05 16:00:10',
        recuperados: 'SIM',
        data_inicio_sintomas: '2020-10-05',
        data_coleta: '2020-10-09',
        sintomas: '',
        comorbidades: '',
        gestante: '',
        internacao: 'NAO INTERNADO',
        internacao_uti: 'NAO INTERNADO UTI',
        sexo: 'MASCULINO',
        municipio: 'FLORIANOPOLIS',
        obito: 'NAO',
        data_obito: 'NULL',
        idade: '38',
        regional: 'GRANDE FLORIANOPOLIS',
        raca: 'NAO INFORMADO',
        data_resultado: '2020-10-07 00:00:00',
        codigo_ibge_municipio: '4205407',
        latitude: '-27.57880592',
        longitude: '-48.50902557',
        estado: 'SANTA CATARINA',
        criterio_confirmacao: 'LABORATORIAL',
        tipo_teste: 'BIOLOGIA MOLECULAR (RT-PCR)',
        municipio_notificacao: 'FLORIANOPOLIS',
        codigo_ibge_municipio_notificacao: '4205407',
        latitude_notificacao: '-27.57880592',
        longitude_notificacao: '-48.50902557',
        classificacao: 'CONFIRMADO',
        origem_esus: 'SIM',
        origem_sivep: 'NAO',
        origem_lacen: 'SIM',
        origem_laboratorio_privado: 'NAO',
        nom_laboratorio: 'LACEN',
        fez_teste_rapido: 'NAO',
        fez_pcr: 'SIM',
        data_internacao: 'NULL',
        data_entrada_uti: 'NULL',
        regional_saude: 'GRANDE FLORIANOPOLIS',
        data_evolucao_caso: 'NULL',
        data_saida_uti: 'NULL',
        bairro: 'CORREGO GRANDE'
    }
*/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('dados.db');

if (db) {
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS casos (data_publicacao TEXT, recuperados TEXT, data_inicio_sintomas TEXT, data_coleta TEXT, sintomas TEXT, comorbidades TEXT, gestante TEXT, internacao TEXT, internacao_uti TEXT, sexo TEXT, municipio TEXT, obito TEXT, data_obito TEXT, idade TEXT, regional TEXT, raca TEXT, data_resultado TEXT, codigo_ibge_municipio TEXT, latitude TEXT, longitude TEXT, estado TEXT, criterio_confirmacao TEXT, tipo_teste TEXT, municipio_notificacao TEXT, codigo_ibge_municipio_notificacao TEXT, latitude_notificacao TEXT, longitude_notificacao TEXT, classificacao TEXT, origem_esus TEXT, origem_sivep TEXT, origem_lacen TEXT, origem_laboratorio_privado TEXT, nom_laboratorio TEXT, fez_teste_rapido TEXT, fez_pcr TEXT, data_internacao TEXT, data_entrada_uti TEXT, regional_saude TEXT, data_evolucao_caso TEXT, data_saida_uti TEXT, bairro TEXT, obs TEXT)");
        console.log("Banco de dados (dados.db) e tabela casos criado com sucesso.")
    });
}

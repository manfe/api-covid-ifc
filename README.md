# api-covid-ifc
API que compila os dados abertos sobre o COVID fornecidos pela CIASC

# DEPENDÊNCIAS
Deve estar utilizando uma versão do node.js acima da versão 12. [https://nodejs.org/en/download/]

# Utilização
Baixar o projeto e executar os comandos conforme necessidade.

Caso a utilização do projeto seja através do banco de dados em arquivo, os seguintes passos são necessários: (em torno de 25min de importação)

1. Abrir o terminal na pasta do projeto;
2. Executar no terminal:

```console
npm install
```

3. Executar no terminal

```console
node baixar_csv
```
4. Configurar o arquivo de banco de dados (dados.db): 

```console
node configurar_db_file
```

5. Importar dados do CSV para o db (SQLITE3)

```console
node importar_db_file
```

6. Inicializar a aplicação:

```console
node iniciar_via_db_file
```


Caso a utilização do projeto seja através do banco de dados em memória, os seguintes passos são necessários: (2min de importação)

1. Abrir o terminal na pasta do projeto;
2. Executar no terminal:

```console
npm install
```

3. Executar no terminal

```console
node baixar_csv
```
4. Iniciar a aplicação (é feita a importação antes de inicializar a API): 

```console
node iniciar_via_db_memory
```

# LICENÇA
GNU AFFERO GENERAL PUBLIC LICENSE - GNU v3
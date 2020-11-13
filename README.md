# api-covid-ifc
API que compila os dados abertos sobre o COVID fornecidos pela CIASC

# DEPENDÊNCIAS
Deve estar utilizando uma versão do node.js acima da versão 12. [https://nodejs.org/en/download/]

# Utilização
Baixar o projeto e executar os comandos conforme necessidade.

Caso a utilização do projeto seja através do banco de dados em arquivo, os seguintes passos são necessários: (em torno de 25min de importação)

* Abrir o terminal na pasta do projeto;
* executar no terminal ```node baixar_csv```
* posteriormente executar ```node configurar_db_file```
* e por último iniciar a API utilizando ```node app_db_file```

Caso a utilização do projeto seja através do banco de dados em memória, os seguintes passos são necessários: (2min de importação)

* Abrir o terminal na pasta do projeto;
* Executar no terminal ```baixar_csv```
* Iniciar a aplicação (é feita a importação antes de inicializar a API): ```node app_db_memory```

# LICENÇA
GNU AFFERO GENERAL PUBLIC LICENSE - GNU v3
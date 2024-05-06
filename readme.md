## Readme

# Gerando Relatorios dos testes

**Esse projeto utiliza o plugin mochawesome para gerar relatorios**
*O comando :*
'''
    npx cypress run --spec "cypress/e2e/Aula4/*.js" --reporter mochawesome
'''
Gera o relatorio para a spec dentro da pasta Aula4. Isso pode ser alterado para qualquer pasta das aulas
ou Gerar um unico relatorio contendo todos os testes pelo *comando :*

'''
    npx cypress run --reporter mochawesome
'''

**Os Comandos devem ser executados no diretorio mais superior do projeto, o que contem os arquivos package.json**
**O Relatório gerado se encontra na pasta mochawesome-report em formato html e pode ser aberto por qualquer navegador**
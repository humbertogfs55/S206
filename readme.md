## Read-me

### Gerando Relatórios de Testes

Este projeto utiliza o plugin Mochawesome para gerar relatórios de testes.

Para gerar um relatório para testes em uma pasta específica (por exemplo, Aula4), utilize o seguinte comando:

```bash
npx cypress run --spec "cypress/e2e/Aula4/*.js" --reporter mochawesome
```

Este comando gera um relatório para os arquivos de especificação dentro da pasta Aula4. Você pode modificar o caminho para direcionar qualquer pasta contendo especificações de teste.

Alternativamente, você pode gerar um único relatório contendo todos os testes com o seguinte comando:

```bash
npx cypress run --reporter mochawesome
```

**Nota:** Estes comandos devem ser executados no diretório de nível superior do projeto, onde o arquivo `package.json` está localizado.

O relatório gerado pode ser encontrado no diretório `mochawesome-report` no formato HTML, e pode ser aberto em qualquer navegador da web.

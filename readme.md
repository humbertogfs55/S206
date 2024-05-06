## Readme

### Generating Test Reports

This project utilizes the Mochawesome plugin to generate test reports.

To generate a report for tests in a specific folder (e.g., Aula4), use the following command:

```bash
npx cypress run --spec "cypress/e2e/Aula4/*.js" --reporter mochawesome
```

This command generates a report for the spec files within the Aula4 folder. You can modify the path to target any folder containing test specs.

Alternatively, you can generate a single report containing all tests with the following command:

```bash
npx cypress run --reporter mochawesome
```

**Note:** These commands should be executed in the top-level directory of the project, where the `package.json` file is located.

The generated report can be found in the `mochawesome-report` directory in HTML format, and it can be opened in any web browser.

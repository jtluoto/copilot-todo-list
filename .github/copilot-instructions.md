# ToDO List

An application for keeping ToDo items organized.

## Technologies
- Express
- Jest
- MySQL database for production
- SQLite database for development

## Coding conventions

- End statements with a semicolon
- Use camelCase for variable and function names
- Use PascalCase for class names
- Keep lines under 80 characters
- Use single quotes for strings, except to avoid escaping
- Place the opening brace of a block on the same line as the statement
- Indent using 4 spaces

## Unit testing

- Tests are run with npm:
```
    npm test
```
- Always run tests after changes and keep editing until the tests pass.

## Project strucure
- Unit tests are in the `spec` directory
- Application code is in the `src` directory
  - Persistence code is in `src/persistence`
  - Routes are in `src/routes`
  - Static files are in `src/static`
    - HTML files are in `src/static`
    - CSS files are in `src/static/css`
    - JavaScript files are in `src/static/js`
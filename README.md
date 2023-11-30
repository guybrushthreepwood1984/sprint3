# Learnyounode

Exercises in Javascript to understand basic node.js functionality. All exercises are working and pass test, with the exception of exercise 6. Exercise 6 receives correct data, but does not pass test because it is using another way to export.

- Project based on this template: https://github.com/jclumbiarres/tsbasico (hexagonal branch)

- ESLint
- Prettier
- ts-jest
- nodemon
- VSCode Debugging
- Github Actions
- Pequeño ejemplo de código funcional con import

La configuración del debugger apunta a src/index.ts como archivo de inicio del proyecto.

Comandos:

Testing:

```sh
npm run test
```

Ejecuta los tests ignorando los que existan en dist/

Prettier format:

```sh
npm run prettier-format
```

Ejecuta manualmente el prettier en el proyecto, recomiendo instalar la extensión prettier y que se autoejecute al guardar.

Watcher:

```sh
npm run dev:watcher
```

Ejecuta nodemon usando src/index.ts como archivo inicial

Dev Run:

```sh
npm run dev:run
```

Ejecuta el proyecto sin watcher

Build:

```sh
npm run build
```

Transpila el proyecto en dist/

---

## Debugger

en el archivo .vscode/launch.json está la configuración del debugger.

```json

```

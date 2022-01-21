
// eslint-disable-next-line import/no-anonymous-default-export
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Application Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{name}}/index.tsx',
        templateFile: './templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{name}}/styles.ts',
        templateFile: './templates/styles.ts.hbs'
      },
    ],
  });
}
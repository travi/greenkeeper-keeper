require('dotenv-safe').load();

export default {
  server: {port: process.env.PORT},
  register: {
    plugins: [
      {
        plugin: 'good',
        options: {
          reporters: {
            console: [
              {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{log: '*', request: '*', response: '*', error: '*'}]
              },
              {module: 'good-console'},
              'stdout'
            ]
          }
        }
      },
      {
        plugin: 'hapi-greenkeeper-keeper',
        options: {
          github: {token: process.env.GITHUB_TOKEN},
          acceptAction: 'rebase'
        }
      },
      {plugin: '@travi/hapi-github-webhooks'},
      {plugin: './auth'}
    ]
  }
};

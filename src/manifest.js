require('dotenv-safe').load();

export default {
  server: {port: process.env.PORT},
  register: {
    plugins: [
      {
        plugin: '@hapi/good',
        options: {
          reporters: {
            console: [
              {
                module: '@hapi/good-squeeze',
                name: 'Squeeze',
                args: [{log: '*', request: '*', response: '*', error: '*'}]
              },
              {module: '@hapi/good-console'},
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
      {
        plugin: 'hapi-graceful-shutdown-plugin',
        options: {
          sigtermTimeout: 10,
          sigintTimeout: 1
        }
      },
      {plugin: 'hapi-github-webhooks'},
      {plugin: './auth'}
    ]
  }
};

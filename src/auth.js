export const plugin = {
  async register(server, options) {
    server.auth.strategy('githubwebhook', 'githubwebhook', 'required', {secret: process.env.GITHUB_WEBHOOK_SECRET});
  },
  name: 'auth',
  dependencies: ['hapi-github-webhooks']
};

const { createProxyMiddleware } = require('http-proxy-middleware');

const Proxy = (app) => {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};

module.exports = Proxy;

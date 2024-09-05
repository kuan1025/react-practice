const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'https://api.github.com',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }  
        }),
    );
}
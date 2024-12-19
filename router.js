const { Router, or, nextRoutes } = require('@harperdb/http-router');
module.exports = new Router().use(nextRoutes).get({
  path: '/dogs/:path*'
}, ({ cache, proxy, setResponseHeader }) => {
	// handle the request here
  setResponseHeader('edgio-test', 'true')
})
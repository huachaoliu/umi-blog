const koa = require('koa');
const compress = require('koa-compress');
const static = require('koa-static');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
const config = require('config');
const proxy = require('./middleware/proxy');
const fallback = require('./middleware/fallback');
const router = require('koa-router')();
const request = require('request');

const app = new koa();
onerror(app);

app.use(logger());
app.use(compress());
app.use(router.routes());
app.use(proxy())
app.use(static(config.get('static.root')));

app.listen(config.get('port'), function () {
  console.log('server listen at port -> ' + config.get('port'));
});
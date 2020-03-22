'use strict';

/* eslint-disable import/no-extraneous-dependencies,no-unused-vars */

const express = require('express');
const e2k = require('express-to-koa');
const Koa = require('koa');
const Router = require('@koa/router');
const Webpack = require('webpack');
const configServer = require('../../../lib/configServer');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  hot: true,
  open: true,
  stats: {
    colors: true,
  },
});

// eslint-disable-next-line new-cap
// const server = new express();
// const router = server

const server = new Koa();
const router = new Router();
devServerOptions.decorateMiddleware = e2k;
server.use(router.routes()).use(router.allowedMethods());

const app = server.listen(8080);

configServer(compiler, devServerOptions, router, app);

'use strict';

const Server = require('./Server');

module.exports = function configServer(compile, options, server, listeningApp) {
  return new Server(compile, options, null, server, listeningApp);
};

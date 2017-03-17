var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'calendar'
    },
    port: process.env.PORT || 3000,
    
    db: 'mysql://root:root@localhost/calendar'

  },

  test: {
    root: rootPath,
    app: {
      name: 'calendar'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/'
  },

  production: {
    root: rootPath,
    app: {
      name: 'calendar'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/'
  }
};

module.exports = config[env];

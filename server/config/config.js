'use strict'
const config = {
  COOKIE: {
    KEY: 'bk-forest.sid',
    SECRET: '111Lskgfvfaksj123-1-0-0192-6756',
    LIFETIME: 3600 * 1000 * 24 * 60
  },
  'Upload': {
    'fileMimetype': {
      'image': [ 'image/jpeg', 'image/jpg', 'image/png', 'image/gif' ],
    }
  },
  USER_ROLES: [
    'member',
    'admin',
  ],
}

module.exports = config

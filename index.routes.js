'use strict'

const path = require('path')
const userService = require("./user.service")

module.exports =
{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join('dist')
    }
  }
}

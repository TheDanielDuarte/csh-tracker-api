'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class EntryNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = EntryNotFoundException

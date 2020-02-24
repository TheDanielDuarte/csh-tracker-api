'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministratorsSchema extends Schema {
  up () {
    this.create('administrators', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('mdcps_id').unique().notNullable()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('administrators')
  }
}

module.exports = AdministratorsSchema

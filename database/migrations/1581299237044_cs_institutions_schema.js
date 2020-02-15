'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CsInstitutionsSchema extends Schema {
  up () {
    this.create('cs_institutions', (table) => {
      table.increments()
      table.string('address').unique().notNullable()
      table.string('org_type').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cs_institutions')
  }
}

module.exports = CsInstitutionsSchema

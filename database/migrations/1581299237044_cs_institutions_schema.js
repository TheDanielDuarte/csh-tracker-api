'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CsInstitutionsSchema extends Schema {
  up () {
    this.create('cs_institutions', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('address').unique().notNullable()
      table.string('org_type').notNullable()
      table.decimal('latitude', 14, 6).notNullable()
      table.decimal('longitude', 14, 6).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cs_institutions')
  }
}

module.exports = CsInstitutionsSchema

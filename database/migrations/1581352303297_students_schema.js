'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('full_name', 80).notNullable()
      table.string('mdcps_id').unique().notNullable()    // string to preserve the 00's
      table.integer('school_location_number').notNullable() //7121 - jaf
      table.integer('admin_id').unsigned().notNullable()
      table.decimal('hours_done').notNullable()
      table.float('hours_goal').notNullable()

      table.foreign('admin_id').references('id').inTable('administrators')
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CsProjectsSchema extends Schema {
  up () {
    this.create('cs_projects', (table) => {
      table.increments()
      table.string('project_name').notNullable()
      table.date('completion_date').notNullable()
      table.integer('hours_completed').notNullable()
      table.text('reflection').notNullable()
      table.text('admin_comments').nullable()
      table.string('supervisor_email').notNullable()
      table.string('supervisor_name').notNullable()
      table.string('status').notNullable()
      table.timestamps()

      // table.integer('admin_id').unsigned().notNullable()
      table.integer('cs_institution_id').unsigned().notNullable()
      table.integer('student_id').unsigned().notNullable()

      // table.foreign('admin_id').references('id').inTable('administrators')
      table.foreign('cs_institution_id').references('id').inTable('cs_institutions')
      table.foreign('student_id').references('id').inTable('students')
    })
  }

  down () {
    this.drop('cs_projects')
  }
}

module.exports = CsProjectsSchema

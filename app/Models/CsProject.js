'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CsProject extends Model {
  static get table () {
    return 'cs_projects'
  }

  student () {
    return this.belongsTo('App/Models/Student', 'id', 'student_id')
  }

  institution () {
    return this.hasOne('App/Models/CsInstitution')
  }
}

module.exports = CsProject

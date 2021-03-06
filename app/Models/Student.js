'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  static get table () {
    return 'students';
  }

  static get hidden () {
    return ['password']
  }

  csProjects() {
    return this.hasMany('App/Models/CsProject', 'id', 'student_id')
  }

  administrator () {
    return this.belongsTo('App/Models/Administrator')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Student

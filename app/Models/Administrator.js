'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Administrator extends Model {
  students() {
    return this.hasMany('App/Models/Student', 'id', 'admin_id')
  }
}

module.exports = Administrator

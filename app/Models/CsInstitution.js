'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CsInstitution extends Model {
  static get table () {
    return 'cs_institutions'
  }

  projects () {
    return this.belongsToMany('App/Models/CsProject')
  }
}

module.exports = CsInstitution

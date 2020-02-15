'use strict'

const InstitutionHook = exports = module.exports = {}

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const acceptedTypes = ['chamber of commerce', 'charity', 'city government', 'civic organization', 'convalescent home', 
  'county agency', 'cultural center', 'day care center', 'elementary school', 'hospice', 'hospital', 'library', 
  'middle School', 'museum', 'park', 'recreation center', 'religious organization', 'service organization',
  'united way agency', 'zoo']

InstitutionHook.method = async (modelInstance) => {
}

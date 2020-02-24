'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const EntryNotFoundException = use('App/Exceptions/EntryNotFoundException')
const CsInstitution = use('App/Models/CsInstitution')

class FindCsInstitution {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, params, response }, next) {
    // call next to advance the request
    const { id: institutionId } = params;
    try {
      const requestedInstitution = await CsInstitution.findOrFail(institutionId)
      request.requestedInstitution = requestedInstitution;

      await next()
    } catch(err) {
      throw new EntryNotFoundException(`Institution with id (${institutionId}) not found`,404)
    }
  }
}

module.exports = FindCsInstitution

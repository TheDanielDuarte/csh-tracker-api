'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CsInstitution = use('App/Models/CsInstitution')

const Database = use('Database')
class CsInstitutionController {
  /**
   * Show a list of all csinstitutions.
   * GET csinstitutions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    return {
      successful: true,
      errors: [],
      res: request.institutions
    }
  }
  
  /**
   * Create/save a new csinstitution.
   * POST csinstitutions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

  }

  /**
   * Return a single csinstitution.
   * GET csinstitutions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */

  async show ({ params, request }) {
    return {
      successful: true,
      errors: [],
      data: [request.requestedInstitution]
    }
  }

  /**
   * Update csinstitution details.
   * PUT or PATCH csinstitutions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    
  }

  /**
   * Delete a csinstitution with id.
   * DELETE csinstitutions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CsInstitutionController

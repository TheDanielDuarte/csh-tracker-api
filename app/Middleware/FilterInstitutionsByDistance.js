'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CsInstitution = use('App/Models/CsInstitution')
class FilterInstitutionsByDistance {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    try {
      const { page: pageRequested, limit, latitude, longitude, distanceConstraint } = request.get()
      let filteredInstitutions;

      if( !!(latitude && longitude) ) {
        const clientCoordinates = {
          latitude: this._toRadians(latitude),
          longitude: this._toRadians(longitude)
        }

        const { rows:institutions } = await CsInstitution.all()

        filteredInstitutions = institutions.filter(item => {
          const distanceFromClient = item.findDistanceFromClient(clientCoordinates)

          return distanceFromClient < (distanceConstraint || 10)
        })
      } else {
        filteredInstitutions = await CsInstitution.query()
          .paginate(pageRequested || 1, limit || 20)
      }
      request.institutions = filteredInstitutions;


      await next()
    } catch(err) {
      throw err;
    }
  }


  _toRadians(angle) {
    return (Math.PI / 180) * angle;
  }
}

module.exports = FilterInstitutionsByDistance

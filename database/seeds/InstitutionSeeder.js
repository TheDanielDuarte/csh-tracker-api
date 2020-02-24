'use strict'

/*
|--------------------------------------------------------------------------
| InstitutionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const CsInstitution = use('App/Models/CsInstitution')
const institutions = [
  {
    name: 'Catholic Community Services',
    org_type: 'religious',
    address: '11440 N Kendall Dr, Miami, FL 33176',
    latitude: 25.685408,
    longitude: -80.382165
  },
  {
    name: 'Coral Park Elementary',
    org_type: 'school',
    address: '1225 SW 97th Ave, Miami, FL 33174',
    latitude: 25.757418,
    longitude: -80.350781
  },
  {
    name: 'Dade County Animal Control Facility',
    org_type: 'pet adoption',
    address: '3599 NW 79th Ave, Doral, FL 33122',
    latitude: 25.807361,
    longitude: -80.324779
  },
  {
    name: 'His House Children\'s Home',
    org_type: 'non-profit',
    address: '20000 NW 47th Ave, Miami Gardens, FL 33055',
    latitude: 25.955963,
    longitude: -80.279609
  },
  {
    name: 'Easter Seal Society of Dade County',
    org_type: 'non-profit',
    address: '1475 NW 14th Ave, Miami, FL 33125',
    latitude: 25.789039,
    longitude: -80.218047
  }
]

class InstitutionSeeder {
  async run () {
    const insertPromises = institutions.map(i => {
      return CsInstitution.create(i)
    })

    await Promise.all(insertPromises)
  }
}

module.exports = InstitutionSeeder

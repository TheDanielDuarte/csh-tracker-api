'use strict'

/*
|--------------------------------------------------------------------------
| StudentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class StudentSeeder {
  async run () {
    const n = 79;
    const seedAdministrator = await Factory.model('App/Models/Administrator').create()
    const seedInstitutions = await Factory.model('App/Models/CsInstitution').createMany(2 * n)
    const seedStudents = await Factory.model('App/Models/Student').makeMany(n)
    const seedProjects = await Factory.model('App/Models/CsProject').makeMany(2 * n)
    const studentSeedPromises = seedStudents.map(student => seedAdministrator.students().save(student))

    await Promise.all(studentSeedPromises)

    for(let i = 0; i < seedProjects.length; i++) {
      const project = seedProjects[i];
      const institution = seedInstitutions[i];

      project['cs_institution_id'] = institution.id;
    }

    const projectSeedPromises = []
    for(let i = 0, s = 0; i < seedStudents.length; i++, s+=2) {
      projectSeedPromises.push(
        seedStudents[i].csProjects().save( seedProjects[s] ),  
        seedStudents[i].csProjects().save( seedProjects[s+1] )
      )
    }

    await Promise.all(projectSeedPromises)
  }
}

module.exports = StudentSeeder

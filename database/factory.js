'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const possibleStatus = ['rejected', 'pending', 'approved', 'uncomplete']
const acceptedTypes = ['chamber of commerce', 'charity', 'city government', 'civic organization', 'convalescent home', 
  'county agency', 'cultural center', 'day care center', 'elementary school', 'hospice', 'hospital', 'library', 
  'middle School', 'museum', 'park', 'recreation center', 'religious organization', 'service organization',
  'united way agency', 'zoo']

Factory.blueprint('App/Models/Student', (faker) => {
  return {
    'full_name': faker.name(),
    'password': faker.password(),
    'mdcps_id': Math.abs(faker.integer({ min: 1000, max: 99999 })),
    'school_location_number': Math.abs(faker.integer({ min: 1000, max: 9999 })),
    'hours_done': Math.abs(faker.integer({ min: 100, max: 1000 })),
    'hours_goal': Math.abs(faker.integer({ min: 100, max: 1000 })),
  }
})


Factory.blueprint('App/Models/Administrator', (faker) => {
  return {
    'name': faker.name(),
    'password': faker.password(),
    'mdcps_id': Math.abs(faker.integer({ min: 1000, max: 9999 })),
  }
})

Factory.blueprint('App/Models/CsProject', (faker) => {
  const randomStatus = possibleStatus[
    Math.floor(Math.random() * (possibleStatus.length))
  ]
  
  return {
    'project_name': faker.word({ length: 5 }),
    'completion_date': faker.date(),
    'hours_completed': Math.abs(faker.integer({ min: 10, max: 100 })),
    'reflection': faker.paragraph(),
    'admin_comments': faker.paragraph({ sentences: 2 }),
    'supervisor_email': faker.email(),
    'supervisor_name': faker.name(),
    'status': randomStatus,
  }
})


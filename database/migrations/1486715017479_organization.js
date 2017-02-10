'use strict'

const Schema = use('Schema')

class OrganizationTableSchema extends Schema {

  up () {
    this.create('po_forms', (table) => {
      table.increments()
      table.string('form',20)
      table.string('abbreviation',10)
      table.string('description')
      table.integer('layer')
      table.integer('organization_id')
      table.timestamps()
    })

    this.create('po_organizations', (table) => {
      table.increments()
      table.string('organization',30)
      table.string('abbreviation',10)
      table.string('address',50)
      table.string('email',30)
      table.string('web',30)
      table.integer('form_id')
      table.date('established_date')
      table.date('disbanded_date')
      table.timestamps()
    })

    this.create('po_people', (table) => {
      table.increments()
      table.string('name')
      table.string('prefix')
      table.string('suffix')
      table.string('birth_place')
      table.string('birth_date')
      table.timestamps()
    })

    this.create('po_officers', (table) => {
      table.increments()
      table.integer('organization_id')
      table.integer('position_id')
      table.integer('person_id')
      table.integer('user_id')
      table.string('decree',80)
      table.timestamps()
    })

  }

  down () {
    this.drop('po_forms')
    this.drop('po_organizations')
    this.drop('po_people')
    this.drop('po_officers')
  }

}

module.exports = OrganizationTableSchema

'use strict'

const Schema = use('Schema')

class OrganizationTableSchema extends Schema {

  up () {

    this.dropIfExists('po_position_role')
    this.dropIfExists('po_people_user')
    this.dropIfExists('po_structures')
    this.dropIfExists('po_positions')
    this.dropIfExists('po_officers')
    this.dropIfExists('po_people')
    this.dropIfExists('po_organizations')
    this.dropIfExists('po_forms')

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
      table.string('organization',50)
      table.string('abbreviation',10)
      table.string('address',50)
      table.string('email',30)
      table.string('web',30)
      table.integer('form_id').unsigned()
      table.date('established_date')
      table.date('disbanded_date')
      table.timestamps()

      table.foreign('form_id').references('po_forms.id')
    })

    this.create('po_people', (table) => {
      table.increments()
      table.string('name',40)
      table.string('prefix',15)
      table.string('suffix',15)
      table.string('birth_place',20)
      table.date('birth_date')
      table.timestamps()
    })

    this.create('po_positions', (table) => {
      table.increments()
      table.integer('form_id').unsigned()
      table.string('position',40)
      table.string('abbreviation',20)
      table.string('description')
      table.integer('layer',2)
      table.timestamps()

      table.foreign('form_id').references('po_forms.id')
    })

    this.create('po_position_role', (table) => {
      table.increments()
      table.integer('position_id').unsigned()
      table.integer('role_id').unsigned()

      table.foreign('position_id').references('po_positions.id')
      // - add foreign to role id 
    })

    this.create('po_people_user', (table) => {
      table.increments()
      table.integer('person_id').unsigned()
      table.integer('user_id').unsigned()

      table.foreign('person_id').references('po_people.id')
      // - add foreign to user id 
    })

    this.create('po_structures', (table) => {
      table.increments()
      table.integer('organization_id').unsigned()
      table.integer('parent_id').unsigned()

      table.foreign('organization_id').references('po_organizations.id')
      table.foreign('parent_id').references('po_organizations.id')
    })

    this.create('po_officers', (table) => {
      table.increments()
      table.integer('organization_id').unsigned()
      table.integer('position_id').unsigned()
      table.integer('person_id').unsigned()
      table.integer('user_id').unsigned()
      table.string('decree',80)

      table.foreign('organization_id').references('po_organizations.id')
      table.foreign('position_id').references('po_positions.id')
      table.foreign('person_id').references('po_people.id')
      // - add foreign to user id 
    })

  }

  down () {
    this.dropIfExists('po_position_role')
    this.dropIfExists('po_people_user')
    this.dropIfExists('po_structures')
    this.dropIfExists('po_positions')
    this.dropIfExists('po_officers')
    this.dropIfExists('po_people')
    this.dropIfExists('po_organizations')
    this.dropIfExists('po_forms')
  }

}

module.exports = OrganizationTableSchema

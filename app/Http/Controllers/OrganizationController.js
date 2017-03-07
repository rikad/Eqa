'use strict'

const Organization = use('App/Model/Organization')
const DB = use('Database')

class OrganizationController {

  * index(request, response) {

    const data = yield DB.raw('SELECT po_organizations.id,po_organizations.organization,po_organizations.abbreviation,po_structures.parent_id,po_forms.form, CASE WHEN po_structures.parent_id = 1 THEN po_organizations.id ELSE po_structures.parent_id END AS sort FROM po_organizations JOIN po_structures ON po_organizations.id = po_structures.organization_id JOIN po_forms ON po_organizations.form_id = po_forms.id ORDER BY sort,po_organizations.id,po_organizations.organization')

    yield response.sendView('organizations',{data: data[0] })
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = OrganizationController

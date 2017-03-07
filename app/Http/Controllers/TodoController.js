'use strict'

const Form = use('App/Model/Form')

class OrganizationController {

  * index(request, response) {

    const data = yield Form.all()

    yield response.sendView('forms',{"data": data.toJSON() })

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

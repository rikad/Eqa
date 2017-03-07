'use strict'

const Form = use('App/Model/Form')

class FormController {

  * index(request, response) {

    const data = yield Form.query().orderBy('layer','asc').fetch()

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

module.exports = FormController

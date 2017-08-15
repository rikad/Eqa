'use strict'

const Lucid = use('Lucid')

class Form extends Lucid {
  static get table() {
    return 'po_forms'
	}

  static get rules() { 
    return {
      form: 'required|string|min:5|max:40',
      abbreviation: 'string|min:2|max:10',
      description: 'string',
      layer: 'required|integer|min:1|max:3',
    }
  }
}

module.exports = Form

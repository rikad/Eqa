'use strict'

const Lucid = use('Lucid')

class Organization extends Lucid {

  static get table() {
  	return 'po_organizations'
  }

  form() {
    return this.belongsTo('App/Model/Form')
  }

  static get rules() { 
    return {
      organization: 'required|string|min:5|max:40',
      abbreviation: 'string|min:2|max:10',
      address: 'string',
      email: 'email',
      form_id: 'required',
      established_date: 'string|min:7|max:11',
      disbanded_date: 'string|min:7|max:11'
    }
  }

}

module.exports = Organization

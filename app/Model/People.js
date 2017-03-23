'use strict'

const Lucid = use('Lucid')

class People extends Lucid {
  static get table() {
    return 'po_people'
  }

  static get rules() { 
    return {
      prefix: 'string',
      name: 'required|string|min:5|max:40',
      suffix: 'string',
      birth_date: 'string|min:9|max:10',
      birth_place: 'string|min:3|max:40'
    }
  }
}

module.exports = People

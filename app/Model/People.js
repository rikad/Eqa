'use strict'

const Lucid = use('Lucid')

class People extends Lucid {
	static get table() {
		return 'po_people'
	}

}

module.exports = People

'use strict'

class RegisterController {
	* index(request, response) {
		yield response.sendView('register')
	}
}

module.exports = RegisterController

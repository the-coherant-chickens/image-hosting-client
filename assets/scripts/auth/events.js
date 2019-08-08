'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onSignUp = event => {
  event.preventDefault()
// debugger
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#signUp').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}

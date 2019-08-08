'use strict'
const store = require('../store')

const successMessage = message => {
  $('#message').text(message).show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
}

const failure = message => {
  $('#message').text('FAIL!').show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // clear out our forms
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('Sign up successful!')
}

const signInSuccessful = responseData => {
  successMessage('Sign in successful!')
  store.user = responseData.user

  $('#passwordButton').removeClass('collapse')
  $('#signOutButton').removeClass('collapse')
}

const changePasswordSuccessful = responseData => {
  successMessage('Password successfully changed!')
}

const signOutSuccessful = responseData => {
  successMessage('Sign out successful!')
}

module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  changePasswordSuccessful,
  failure
}

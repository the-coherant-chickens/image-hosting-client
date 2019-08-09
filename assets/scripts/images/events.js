'use strict'

const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onImageUpload = event => {
  event.preventDefault()
  console.log('This is the form', event.target)
  const formData = new FormData(event.target)
  formData.append('owner', store.user._id)
  for (const [key, value] of formData.entries()) {
    console.log('Yatzee!!', 'Key value is ' + key, 'Value value is ', value)
  }
  console.log(formData)
  api.imageUpload(formData)
    .then(ui.imageUploadSuccessful)
    .then()
    .catch(console.error)
}

const addHandlers = () => {
  $('#imageUploadForm').on('submit', onImageUpload)
}

module.exports = {
  addHandlers
}

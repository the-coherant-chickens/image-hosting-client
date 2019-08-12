'use strict'

const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const resetFormfields = function () {
  event.target.reset()
}

const onImageUpload = event => {
  event.preventDefault()
  console.log('This is the form', event.target)
  const formData = new FormData(event.target)
  formData.append('owner', store.user._id)
  for (const [key, value] of formData.entries()) {
    console.log('Yatzee!!', 'Key value is ' + key, 'Value value is ', value)
  }
  console.log(formData)
  resetFormfields()
  api.imageUpload(formData)
    .then(ui.imageUploadSuccessful)
    .then()
    .catch(console.error)
}

const onDeleteImage = data => {
  event.preventDefault()
  resetFormfields()
  const target = event.target
  const currentImage = $(target).data('del-image')

  api.deleteImage(currentImage)
    .then(console.log)
    .catch(console.error)
}

const onImageIndex = (formData) => {
  event.preventDefault()
  api.imageIndex(formData)
}

const addHandlers = () => {
  $('#imageUploadForm').on('submit', onImageUpload)
  $('#imageDelete').on('click', onDeleteImage)
  // LP ADDED to test
  $('#getIndex').on('submit', onImageIndex)
  // end LP
}

module.exports = {
  addHandlers
}

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

const onSetDeleteState = data => {
  event.preventDefault()

  api.imageIndex()
    .then(ui.setDeleteStateSuccess)
    .catch(ui.setDeleteStateFail)
}

const onDeleteImage = data => {
  event.preventDefault()
  const target = event.target
  const currentImage = $(target).data('del-image')
  console.log('target is ', target)
  console.log('current image is ', currentImage)

  api.deleteImage(currentImage)
    .then(ui.deleteImageSuccess)
    .catch(ui.deleteImageFail)
}

const onImageIndex = (formData) => {
  event.preventDefault()
  api.imageIndex(formData)
}

const addHandlers = () => {
  $('#imageUploadForm').on('submit', onImageUpload)
  $('#show-delete').on('click', onSetDeleteState)
  $('body').on('click', '.delete-image', onDeleteImage)
  // LP ADDED to test
  $('#getIndex').on('submit', onImageIndex)
  // end LP
}

module.exports = {
  addHandlers
}

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

const onImageIndex = data => {
  event.preventDefault()

  $('#user-status').text('')

  $('#show-images').hide()

  api.imageIndex()
    .then(ui.indexImagesSuccess)
    .catch(ui.indexImagesFailure)
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

const addHandlers = () => {
  $('#show-create').on('click', function () {
    $('#imageUploadForm').show()
    $('#show-images').show()
    $('#show-create').hide()
    $('#images-content').html('')
    $('#cancel-delete').hide()
    $('#show-delete').hide()
  }).hide()
  $('#imageUploadForm').on('submit', onImageUpload).hide()
  $('#imageUploadForm').on('submit', function () {
    $('#show-create').show()
    $('#show-images').show()
  }).hide()
  $('#show-delete').on('click', onSetDeleteState).hide()
  $('#show-delete').on('click', function () {
    $('#cancel-delete').show()
    $('#show-delete').hide()
  })
  $('#cancel-delete').on('click', onImageIndex).hide()
  $('#cancel-delete').on('click', function () {
    $('#show-delete').show()
    $('#cancel-delete').hide()
  }).hide()
  $('body').on('click', '.delete-image', onDeleteImage)
  $('#show-images').on('click', onImageIndex).hide()
  $('#show-images').on('click', function () {
    $('#show-images').hide()
    $('#cancel-delete').hide()
    $('#imageUploadForm').hide()
    $('#show-create').show()
    $('#show-delete').show()
  })
}

module.exports = {
  addHandlers
}

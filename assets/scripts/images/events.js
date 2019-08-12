'use strict'

const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
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

const onSetUpdateState = data => {
  event.preventDefault()

  api.imageIndex()
    .then(ui.setUpdateSuccess)
    .catch(ui.setUpdateFail)
}

const onSelectImageEdit = data => {
  event.preventDefault()

  const target = event.target
  const currentImage = $(target).data('update-image')
  // const resource = store.images.find(image => currentImage === image._id)

  api.imageGet(currentImage)
    .then(ui.getImageSuccess)
    .catch(ui.getImageFail)
}

const onUpdateImage = event => {
  event.preventDefault()
  console.log('event target is', event.target)
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const currentImage = $(form).data('update-image')

  // const resource = store.images.find(image => id === image._id)
  // store.id = id

  api.updateImage(currentImage, formData)
    .then(ui.updateImageSuccess)
    .catch(ui.updateImageFail)
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
  $('#show-update').on('click', onSetUpdateState)
  $('body').on('click', '.update-image', onSelectImageEdit)
  $('body').on('submit', '#imageUploadForm', onUpdateImage)
}

module.exports = {
  addHandlers
}

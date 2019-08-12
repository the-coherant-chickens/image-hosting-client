'use strict'

const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('../store')

const onImageUpload = event => {
  event.preventDefault()
  const formData = new FormData(event.target)
  formData.append('owner', store.user._id)
  api.imageUpload(formData)
    .then(ui.imageUploadSuccessful)
    .then()
    .catch(ui.imageUploadFailure)
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

  api.imageGet(currentImage)
    .then(ui.getImageSuccess)
    .catch(ui.getImageFail)
}

const onUpdateImage = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const currentImage = $(form).data('update-image')

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

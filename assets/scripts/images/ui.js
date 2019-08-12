'use strict'

const store = require('../store')
const showImagesTemplate = require('../templates/image-listing.handlebars')
const deleteImageTemplate = require('../templates/delete-image.handlebars')
const updateImageTemplate = require('../templates/update-image.handlebars')
const getImageTemplate = require('../templates/choose-image.handlebars')

const successMessage = message => {
  $('#user-status').text(message).fadeIn(1000)
  $('#user-status').addClass('success')
  $('#user-status').removeClass('failure')

  // clear forms
  $('form').trigger('reset')
  $('#user-status').text(message).fadeOut(3000)
}

const failureMessage = message => {
  $('#user-status').text(message)
  $('#user-status').addClass('failure')
  $('#user-status').removeClass('success')

  // clear forms
  $('form').trigger('reset')
}

const imageUploadSuccessful = responseData => {
  store.image = responseData.image
  successMessage('Successfully Uploaded Your Image!')
  responseData.image.userName = () => {
    return store.user.email.split('@')[0]
  }
  const showImagesHtml = showImagesTemplate({images: responseData})
  $('#images-content').html(showImagesHtml)
  $('form').trigger('reset')
  $('#imageUploadForm').hide()
}

const imageUploadFailure = function () {
  failureMessage('Unable to Upload Image')
}

const indexImagesSuccess = responseData => {
  store.images = responseData.images
  $('#images-content').html('')
  let i
  for (i = 0; i < store.images.length; i++) {
    store.images[i].userName = store.images[i].owner.email.split('@')[0]
  }
  const showImagesHtml = showImagesTemplate({ images: store.images })
  $('#images-content').append(showImagesHtml)
}

const indexImagesFailure = function () {
  failureMessage('You haven\'t added uploaded any images yet!')
}

const setDeleteStateSuccess = responseData => {
  const images = responseData.images
  $('#images-content').html('')
  $('#imageUploadForm').hide()
  $('#show-create').show()
  let i
  for (i = 0; i < images.length; i++) {
    images[i].userName = images[i].owner.email.split('@')[0]
    images[i].editable = images[i].owner.email === store.user.email
  }
  console.log('Data going to delete handlebars = ', images)
  const imagesHtml = deleteImageTemplate({ images: images })

  $('#images-content').append(imagesHtml)
}

const setDeleteStateFail = function () {
  failureMessage('No Images To Delete!')
}

const deleteImageSuccess = () => {
  successMessage('Successfully deleted Image')
  $('#images-content').html('')
  $('#show-delete').hide()
  $('#cancel-delete').hide()
  $('#show-images').show()
}

const deleteImageFail = function () {
  failureMessage('Unable to Delete Image')
}

const setUpdateSuccess = responseData => {
  const images = responseData.images
  $('#images-content').html('')
  $('#imageUploadForm').hide()
  $('#show-edit').show()

  const imagesHtml = updateImageTemplate({ images: images })

  $('#images-content').append(imagesHtml)
}

const setUpdateFail = function () {
  failureMessage('Unable to Update Image')
}

const updateImageSuccess = responseData => {
  successMessage('Successfully upated Image')

  $('#images-content').html('')
  $('#show-images').show()
}

const updateImageFail = function () {
  failureMessage('Unable to Update Image')
}

const getImageSuccess = responseData => {
  successMessage('Successfully got Image')

  const imagesHtml = getImageTemplate({ images: responseData })

  $('#images-content').html(imagesHtml)
}

const getImageFail = function () {
  failureMessage('Unable to get Image')
}

module.exports = {
  imageUploadSuccessful,
  imageUploadFailure,
  setDeleteStateSuccess,
  setDeleteStateFail,
  deleteImageSuccess,
  deleteImageFail,
  indexImagesSuccess,
  indexImagesFailure,
  setUpdateSuccess,
  setUpdateFail,
  updateImageSuccess,
  updateImageFail,
  getImageSuccess,
  getImageFail
}

'use strict'

const store = require('../store')
const showImagesTemplate = require('../templates/image-listing.handlebars')
const deleteImageTemplate = require('../templates/delete-image.handlebars')

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

  const showImagesHtml = showImagesTemplate({images: responseData})

  $('#images-content').html(showImagesHtml)

  $('form').trigger('reset')
  $('#imageUploadForm').hide()
}

const imageUploadFailure = function () {
  failureMessage('Unable to Upload Image')
}

const indexImagesSuccess = responseData => {
  console.log('responseData is ', responseData)
  store.images = responseData.images
  console.log('store.images is ', store.images)

  $('#images-content').html('')

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

module.exports = {
  imageUploadSuccessful,
  imageUploadFailure,
  setDeleteStateSuccess,
  setDeleteStateFail,
  deleteImageSuccess,
  deleteImageFail,
  indexImagesSuccess,
  indexImagesFailure
}

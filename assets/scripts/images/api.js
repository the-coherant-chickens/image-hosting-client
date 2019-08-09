'use strict'

const config = require('../config')
const store = require('../store')

const imageUpload = formData => {
  return $.ajax({
    method: 'POST',
    data: formData,
    url: config.apiUrl + '/images',
    contentType: false,
    processData: false,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateImage = function (currentImage, formData) {
  return $.ajax({
    url: config.apiUrl + '/images/' + currentImage,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteImage = function (currentImage) {
  return $.ajax({
    url: config.apiUrl + '/images/' + currentImage,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  imageUpload,
  updateImage,
  deleteImage
}

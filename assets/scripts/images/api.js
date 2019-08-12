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

// GET request
const imageGet = currentImage => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images/' + currentImage,
    // contentType: false,
    // processData: false,
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

// GET request
const imageIndex = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images',
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
  imageGet,
  imageIndex,
  updateImage,
  deleteImage
}

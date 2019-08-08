'use strict'

const config = require('../config')
const store = require('../store')

const imageUpload = formData => {
  $.ajax({
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

module.exports = {
  imageUpload
}

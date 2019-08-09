'use strict'

const store = require('../store')
const showImagesTemplate = require('../templates/image-listing.handlebars')

const imageUploadSuccessful = responseData => {
  store.image = responseData.image

  const showImagesHtml = showImagesTemplate({images: responseData})

  $('#images_content').html(showImagesHtml)
}
module.exports = {
  imageUploadSuccessful
}

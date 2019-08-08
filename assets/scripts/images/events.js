'use strict'

const api = require('./api')
const ui = require('./ui')

const onImageUpload = event => {
  event.preventDefault()
  console.log(event.target)
  const formData = new FormData(event.target)
  for (const [key, value] of formData.entries()) {
    console.log('Yatzee!!', 'Key value is ' + key, 'Value value is ', value)
  }
  api.imageUpload(formData)
    .then()
    .catch()
}

const addHandlers = () => {
  $('#imageUploadForm').on('submit', onImageUpload)
}

module.exports = {
  addHandlers
}

'use strict'

// const addHandlers = function () {
//   $('#imageUploadForm').on('submit', function (event) {
//     debugger
//     event.preventDefault()
//     console.log('event', event)
//     const formData = new FormData(event.target)
//     console.log('form data', formData)
//     for (const [key, value] of formData.entries()) {
//       console.log(key, value)
//     }
//   })
// }

const onImageUpload = event => {
  event.preventDefault()
  console.log('Get it together James, you Dumb Dummy')
}

const addHandlers = () => {
  $('#imageUploadForm').on('submit', onImageUpload)
}

module.exports = addHandlers

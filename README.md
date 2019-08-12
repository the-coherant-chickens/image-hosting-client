# The Coherent Chickens
## Image Hosting

This repo is built in tandem with https://github.com/the-coherant-chickens/the-coherent-chickens-express

## Deployed Link
<https://the-coherant-chickens.github.io/the-coherent-chickens-client/>

## Heroku Link
<https://the-coherent-chickens-heroku.herokuapp.com/>

### Authors:
- ##### Lori Pinkham (@lpinkham) | *Project Lead / Product Lead*
- ##### Gabriel Andreottola (@gandreottola) | *Quality Assurance Lead*
- ##### Seth Sprague (@swsprague) | *Back-End Lead*
- ##### James Hankins (@JHankins09) | *Front-End Lead*

### Development Process

Chicken Pic's is an app to help you organize your images. This app allows you to upload your photo's and add some meaningful tags to each image. Create an account, sign-in and get started.

### Planning

#### Initial User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to upload an image to AWS.
- As a signed in user, I would like to update the meta-data of my image on AWS.
- As a signed in user, I would like to see the name of all images on AWS.
- As a signed in user, I would like to see the thumbnail of all images on AWS.
- As a signed in user, I would like to delete the reference of my image from the database.
- As a signed in user, I would like to see the following meta-data for any image:
  - date created/uploaded
  - date modified
  - owner (user who uploaded the image)
  - tag

#### Initial Wire framing

##### Client
- https://media.git.generalassemb.ly/user/21061/files/a8045f00-b9c7-11e9-9ef4-9dd1ba38e8d2
- https://media.git.generalassemb.ly/user/21061/files/b5214e00-b9c7-11e9-8424-a0067c400fdb
- https://media.git.generalassemb.ly/user/21061/files/c66a5a80-b9c7-11e9-9e78-5bdd1e324f03

#### This project was planned to be built in 3 primary parts:
  1. Build out API
    - Build out API to allow for users and images relationship, as well as AWS implimentation for image hosting.
    - Apply relationships that allow for creation and deletion of images and to tie them to user accounts
    - Update image and date updated record implimented as well.
  2. Development of Client
    - Build out user authentication functionality including sign-up, sign-in, change-password, etc.
    - Apply semantic code to section out front end develpment and seperate user functionality.
    - Build out image functionality to view, delete and update. Also allows to tag images with multiple comma seperated attributes.
  3. Reduce code quantity by refactoring for callback usage
    - Continuous improvement for refactoring of code-blocks to allow for better legibility and future development.

### Development Process

Developement split amongst 4 primary team members. Scope of project created numorous conflicts as features were built and imported to master code block, creating some repetition in content build. Team may have been too large or project scope to small.

## Unresolved issues / features for future release

- Responsive Design
  * Mobile UI
  * Tablet UI

- Interactive UI
  * Stronger form usage
  * Higher sign-up rate upon visit

- Automatic Sign In

- Sort and filter functionality by tag

- Public image space for users to like, comment or follow other users

- SEO enabled

- Smoother navigation and landing pages

## Built With (technologies used)

### The technologies include in the build of this project are:
#### Front-end
  - HTML5 & CSS3
  - javascript
  - handlebars
  - AJAX based JSON calls
  - Bootstrap

#### Back-end
  - AWS
  - MongoDB and Mongoose
    - Powered by Express
  - javascript
  - Node.js


## Acknowledgments
This project is built as the result of participating in General Assembly Boston's Software Engineering Immersive course.

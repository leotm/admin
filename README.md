# Requirements

1) Creating an admin view for new user data:

Use a NodeJS (or Ruby on Rails 5) framework and build a very simple admin panel to manage the users of the platform.

Frontend Developer - focus more on styling and UX side of the task
Backend developer - focus more on backend code (validation, selecting only needed fields from database, authentication (login and password for admins) implementation, validation on ActiveRecord level, email should be unique, password should be strong enough)

- create a user model with the fields: firstname, surname, email, password (all fields are required)

- display users in the table, each row should display all above fields plus actions column where there will be EDIT and DELETE

- EDIT should open a page where we can change user details, after change user goes back to list

- above list we put a button ADD which takes to the form so we can add new user

- DELETE button should display the confirmation popup (JS 'confirm' function), only if I press YES record should be deleted

2) Formulate an algorithm to sort venues in London on this page: www.venuescanner.com/book-venue-london and in doing so, provide your workings and explanations.

# Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Hapi server

Run `npm start` for a hapi server. This will also build the project beforehand. Navigate to `http://localhost:3000/`. The node app will automatically reload if you change any of the source files in the root directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the Angular source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
See [this](https://stackoverflow.com/a/47640447/1998086) or [this](https://github.com/karma-runner/karma/issues/2852) regarding the EditComponent Karma/Jasmine test.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

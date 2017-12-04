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

## 2

After looking at the URL and mocking an example venue as a JSON (mock-data.json), we could utilise the Web Geolocation API and getCurrentPosition method (if the visitor hits OK to allow it) to display venues within a radius of e.g. 25 miles of the visitor. We could include 'other spaces in this venue' so that the visitor has plenty more choices nearby. This would be ideal if the visitor favours local events.

googleanalytics/autotrack could be a good choice to track visitor events, scrolls, media query changes, external URL visits, etc. to feed into a machine learning algorithm, to further learn which venue the user prefers. E.g. a visitor visiting external URLs in Bond Street may be keen on venues there. Combined with searching 'wedding preparation' may be looking to plan a wedding in Bond Street.

We could implement content-based filtering based on the users' filters.
Or ideally with a larger user base, utilise collaborative filtering APIs.

We could store data on the client side, to be used when sorting the venues on the page. Consider which of sessionStorage, localStorage, sessionStorage and cookies would be most appropriate.

If there is no API to query the venue data available, I would utilise a HTML parsing (web scraping) API such as Google's phpQuery API (which I favoured after trying several) to scrape the venue data with CSS selectors into a MySQL database, having done this before.

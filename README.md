# Aprendices UI
[![Build Status](https://travis-ci.org/paucls/aprendices-ui.svg?branch=master)](https://travis-ci.org/paucls/aprendices-ui)

A simple web app listing post of the Aprendices community.  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `yarn start:dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Documentation
Links to some of the articles and documentation used to implement this project:

- How to use Flexbox to create a modern CSS card design layout, Abbey Fitzgerald
https://getflywheel.com/layout/flexbox-create-modern-card-design-layout/
- Favicon generator
https://favicon.io/favicon-generator

## TODO
- Categories for the view should also have a "selected" flag
to avoid problems when reloading. Now the component is keeping
the selected state itself.
- Selecting a category form the card should select the category
on the sidenav.

# Deploy Angular App on Heroku

A short tutorial on how to deploy an Angular application on Heroku using Node and Express framework.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.



## Quick Start

This project has following prerequisites which needs to be installed on your system in order to proceed.
<ul>
<li> <a href="https://nodejs.org/en/download/">Node.js</a>
<li> <a href="https://git-scm.com/downloads/">Git</a>
<li> <a href="https://github.com/angular/angular-cli/">Angular cli</a>
</ul>

## Creating a new Angular project
1. Open terminal into the folder where you want to setup the project.
2. Run: `ng new <name-of-project>` without <>

## Steps to deploy on Heroku
1. `cd` into the project folder and create a new file `server.js`
2. Run `npm install express` in terminal.
3. Paste the <a href="https://github.com/rajdeepsharma17/test_deploy_heroku/blob/master/server.js">following</a> code into the server.js file
4. Open package.json and make sure its build, start, postinstall script and dependencies section looks similar to <a href="https://github.com/rajdeepsharma17/test_deploy_heroku/blob/master/package.json">this</a>.
5. Commit all the changes and push it to a newly created repository.
6. Open <a href="https://dashboard.heroku.com/apps">Heroku</a>
7. Create a new app.
8. Select Github as your deployment method.
9. Enable Automatic Deploys.
10. Select master branch of your created repository for deployment and wait for it to build the project.
  
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

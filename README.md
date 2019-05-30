# mapp4travel-ultimate

Travel mApp

Implement a small app, in which we will be able to see all Countries, mark countries you've visited and the ones you would like to visit.

What we need:
1. Country listing with the possibility of searching and sorting by various attributes (name, code, capital city etc.)
    <!-- done -->
2. Retrieve countries from https://restcountries.eu/
    <!-- retrieved on app start up and stored in local store -->
3. Each country can be previewed to get more information
    <!-- todo: styling -->
4. Each country can be marked by user as “visited" or “want to visit”, 
    <!-- done -->
5.  plus user can add some notes for each
    <!-- done: can be done from list view of visited/want to visit by modal -->
6.    Form to add notes (with all necessary fields) and  “visited”, “want to visit” marker
    <!-- done: form is displayed in modal, user can mark countries separately -->
7.    Listing of all “visited" or “want to visit” countries
    <!-- done: each collection can be checked in separate views -->
8.    Markers and notes should be saved in local application store 
    <!-- used vuex -->
Please:
1.    Use Vue.js 
    <!-- done -->
2.    You can use existing design framework if you want
    <!-- tested vuetify for this purpose -->
3.    Use Webpack
    <!-- used vue-cli instead -->
4.    Consider possibility to make PWA in the future
    <!-- focused on app to have side-navigation common in, tested with: iPhone x/6/7/8, pixel 2/2 xl  -->
5.    Document project - how to run project and work with it in the future
    <!-- this document does this -->
6.    Avoid using over-complex solutions and boilerplate code
    <!-- used vue-cli to generate project's main structure,  -->

## What can be implemented in future?
    1. removing notes/countries from collections
    2. saving to external database

## ## ## HOW TO WORK WITH THE PROJECT ## ## ## 

## Node version used for development
v10.15.2

## Project setup

# prerequisites
# install vue-cli
npm install -g vue-cli

# in some cases vue-template-compiler breaks, try this
npm install vue-template-compiler@
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Demo-Saga

# Demo Solution


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

  - While running project please follow the steps below.
  

# Libraries, Tools and Packages Required !

  - Yarn / Npm, NodeJS, Mongodb  
  - System must be able to connect mongodb using same port as in project e.g: 'mongodb://localhost:27017'

# Follow the steps to install and run server and client project
Steps:
```sh
$ cd Demo-Saga 
$ Yarn install / npm install
$ yarn run dev / npm run dev (it will run both server and client)
```
```sh
-Server
$ cd Demo-Saga/server 
$ Yarn install / npm install
$ Yarn start / npm start 

-Client
$ cd Demo-Saga/client 
$ Yarn install / npm install
$ Yarn start / npm start 
```
## Paths
| Ports | Path | Note |
| ------ | ------ | ------ |
| 5000 | http://localhost:5000 | Node Server is running on it
| 5000 | http://localhost:5000/downloadArticles | Run only once to download data
| 3000 | http://localhost:3000/ | Client Project is running on it

##### Tools and Technology used in development

- Node, Mongo, React, Redux, Saga, Reducer, React Hook etc

###### If any problem while running please don't hesitate to contact me.

###### Developer Sunjay Kumar (Sunny) 
Contact#: +6694 887 7955
```
Demo-Saga
├─ .gitignore
├─ .vscode
│  └─ launch.json
├─ README.md
├─ bin
│  └─ www
├─ client
│  ├─ build
│  │  ├─ favicon.ico
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.js
│  │  ├─ App.test.js
│  │  ├─ api
│  │  │  ├─ apiCall.js
│  │  │  └─ articleApi.js
│  │  ├─ assets
│  │  │  ├─ No_image_3x4.png
│  │  │  └─ logo.png
│  │  ├─ components
│  │  │  ├─ alertBox.js
│  │  │  ├─ article
│  │  │  │  ├─ article.js
│  │  │  │  └─ article.module.css
│  │  │  ├─ form
│  │  │  │  └─ form.js
│  │  │  ├─ pages
│  │  │  │  └─ mainPage.js
│  │  │  └─ pagination
│  │  │     └─ Pagination.js
│  │  ├─ config.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ logo.svg
│  │  ├─ main.css
│  │  ├─ serviceWorker.js
│  │  ├─ setupTests.js
│  │  └─ store
│  │     ├─ actions
│  │     │  └─ articleActions.js
│  │     ├─ reducers
│  │     │  ├─ index.js
│  │     │  └─ reducer.js
│  │     └─ sagas
│  │        ├─ articleSagas.js
│  │        └─ index.js
│  └─ yarn.lock
├─ package.json
├─ server
│  ├─ app.js
│  ├─ config.js
│  ├─ public
│  │  └─ stylesheets
│  │     └─ style.css
│  ├─ routes
│  │  └─ index.js
│  └─ views
│     ├─ error.jade
│     ├─ index.jade
│     └─ layout.jade
└─ yarn.lock

```
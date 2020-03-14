# Theatre-seating

This app is being adapted from [Sophie van Wersch's](https://github.com/SophieMaryam) [Theatre-seating project](https://github.com/SophieMaryam/Theatre-seating).

The app is a web app that allows users of a so-called "Space Card" to configure their cards. It is currently hosted on Firebase. Check it out [here](https://bison-hacks-1b8e0.firebaseapp.com). Also check out the [presentation](http://bit.ly/ChubaBISONPresentation) I prepared for the judges.

## Steps for Setup

The project was dockerized using steps suggested by [VueJS cookbook](https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html#Real-World-Example). <br>
Take the following steps to set up the project using docker:

Clone the repository
``` bash
git clone https://github.com/ChubaOraka/Space-Card.git
```

Change directory*
``` bash
cd Space-Card/
```

Build the docker images required
``` bash
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```

Build the docker images required
``` bash
docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

Finally, open the website by typing this in your browser: http://localhost:8080

\* Note: You would need to edit the Firebase configuration file located at [`./src/common/config.js`](./src/common/config.js). Get the settings by using a [Firebase project](https://firebase.google.com/docs/web/setup).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

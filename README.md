# React Firebase Avatar

react-firebase-avatar is a react npm package for those using React and Firebase (surprisingly!)
You can use the react component to display an avatar image using the Firebase user object.
Just pass in the Firebase user ID and image.
The avatar image will show a green dot if the user is on line. Or a grey dot if the user is off line.

## Build

    yarn build

## Realtime Database Security Rules

`{ "rules": { ".read": true, ".write": "auth.uid !== null" } }`

https://firebase.google.com/docs/rules/basics#realtime-database

## Run example

cd example/

Install deps

    yarn

Run the example:

    yarn start

Login with a gmail account and see your Avatar with the presence green dot.

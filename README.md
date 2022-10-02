## Build

    yarn build

## Realtime Database Security Rules

`{ "rules": { ".read": true, ".write": "auth.uid !== null" } }`

https://firebase.google.com/docs/rules/basics#realtime-database

# Communication example between iframe and parent apps

To communicate beetween iframe and parent app on diffrent domains, you can use `postMessage` feature.

## Installation

Just run `npm ci` command to install all dependencies

## Running example

To run applications on different domains we are using two express simple apps which are serving indexes with simple js scripts. To start example please run in terminal

```
npm run start
```

It will run applications on `http://localhost:3000` (parent app) and `http://localhost:4000` (iframe app). To see project just open in browser [http://localhost:3000](http://localhost:3000/) then press `Start listening iframe messages` button and watch browser console, next click the second button `Click me to update parent app`
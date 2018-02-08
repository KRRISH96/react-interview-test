# React Interview Test

### Instructions

This is a small react application that takes pokemon data from [pokeapi](https://pokeapi.co) and renders it to the screen. It looks like this:

<img src="./docs/appInitialScreenshot.png" />

<strong>Please modify this application in the following ways:</strong>

1. The name of each pokemon should be capitalized (for example the screen shot shows `bulbasaur` - make it show `Bulbasaur`)
2. Clicking on a pokemon should take the user to a screen where all of the available sprites for a pokemon are shown

Below is an example of what a complete solution could potentially look like (the design does <strong>not</strong> have to look like this - this is merely one way of accomplishing things):

<img src="./docs/appFinalExample.gif" />

### Installation

You should fork this repo ([see this for helpful documentation on how to fork](https://help.github.com/articles/fork-a-repo/)) and work on your changes on your fork.

Once you have properly forked the repo you can clone it and get it on your local machine. Then you can install the dependencies as shown:

```
# install all the dependencies
yarn install # or npm install
```

You can then start the app:

```
yarn start # or npm start
```

### App Structure

This app was scaffolded with [Create React App](https://github.com/facebook/create-react-app).

Some descriptions on the files that are included (you mostly need to pay attention to the `src/` folder):

* `App.js` - where the requests to the api are being made and the data is getting rendered out
* `resourceUrls.js` - contains an array of urls that correspond to the pokemon that we are getting data for (starter pokemon)
* `components` folder
  * `Card.js` - component that provides the styles for the 'card' containing the pokemon name and sprite
  * `Grid.js` - component that provides the grid layout

### Useful Links

* [Official React Documentation](https://reactjs.org/)
* [Pokeapi](https://pokeapi.co/) - Where the data in this app is coming from
  * [Pokeapi Browser Wrapper](https://github.com/PokeAPI/pokeapi-js-wrapper) - Wrapper being used in the app
* [Styled-Components](https://github.com/styled-components/styled-components) - Library being used for styling in the app (feel free to use whatever styling method you want)
* [Polished](https://github.com/styled-components/polished) - Utility functions for use with styled-components
* [React Router](https://github.com/ReactTraining/react-router) - popular router for react applications

### Misc

If you have any questions or run into any issue please feel free to reach out to me!

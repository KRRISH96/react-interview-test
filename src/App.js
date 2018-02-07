import React, { Component } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
import resourceUrls from "./resourceUrls";
import Grid from "./components/Grid";
import Card from "./components/Card";

// options for our pokedex
const options = {
  protocol: "https",
  versionPath: "/api/v2/",
  cache: true
};
// create a new Dex
const Dex = new Pokedex(options);

class App extends Component {
  state = {
    pokemon: []
  };

  async componentDidMount() {
    // get all of pokemon data
    const pokeData = await Dex.resource(resourceUrls);

    // put our pokemon data in state
    this.setState({ pokemon: pokeData });
  }
  render() {
    return (
      <Grid>
        {this.state.pokemon.map((poke, i) => (
          <Card key={poke.name} colorIndex={Math.floor(i / 3) % 3}>
            <img src={poke.sprites.front_default} alt={poke.name} />
            {poke.name}
          </Card>
        ))}
      </Grid>
    );
  }
}

export default App;

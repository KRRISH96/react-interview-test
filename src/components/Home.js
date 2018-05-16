import React, { Component } from "react";
import Grid from "./Grid";
import Card from "./Card";
import { getPokeData } from '../api';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {
    pokemon: []
  };

  async componentDidMount() {
    // get all of pokemon data from api.js
    const pokeData = await getPokeData();

    // put our pokemon data in state
    this.setState({ pokemon: pokeData });
  }
  render() {
    return (
      <Grid>
        {this.state.pokemon.map((poke, i) => (
          <Link to={`/${poke.name}`} key={poke.name}>
          <Card colorIndex={Math.floor(i / 3) % 3}>
            <img src={poke.sprites.front_default} alt={poke.name} />
            {poke.name[0].toUpperCase()+poke.name.slice(1)}
          </Card>
          </Link>
        ))}
      </Grid>
    );
  }
}

export default Home;

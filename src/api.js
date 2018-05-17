import { Pokedex } from "pokeapi-js-wrapper";
import resourceUrls from "./resourceUrls";

// options for our pokedex
const options = {
  protocol: "https",
  versionPath: "/api/v2/",
  cache: true
};
// create a new Dex
const Dex = new Pokedex(options);

//exports all pokemon data
export function getPokeData() {
  return Dex.resource(resourceUrls);
}

//exports data of required pokemon which is called with name as its parameter
export function getReqPokeData(pokemon) {
  return Dex.resource(`/api/v2/pokemon/${pokemon}`)
}

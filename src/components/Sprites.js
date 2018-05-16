import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getReqPokeData } from '../api';


class Sprites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqSpriteData: []
    };
  }

  async componentDidMount() {
    // get pokemon data that is clicked on
    const spriteData = await getReqPokeData(this.props.match.params.pokeId);

    // put our pokemon sprites in state
    this.setState({ reqSpriteData: spriteData[0].sprites });
  }
  render() {
    const { reqSpriteData } = this.state;
    //convering to array for mapping with its values
    const sprites = Object.values(reqSpriteData);
    //filtering out sprites that has a value of null
    const availableSprites = sprites.filter(sprite => sprite !== null );
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center', background:"#079992"}}>
      <div>
      <h1>I am {this.props.match.params.pokeId[0].toUpperCase()+this.props.match.params.pokeId.slice(1)}</h1>
      <Link to='/'>Go Back</Link>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap',margin: '5px'}}>
        {availableSprites.map((sprite,index) => (
          <img key={index} src={sprite} alt={this.props.match.params.pokeId} style={{margin: '10px',border: '1px dashed green', background: '#fff'}}/>
      ))}
      </div>
      </div>
    )
  }
}

export default Sprites;

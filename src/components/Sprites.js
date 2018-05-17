import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getReqPokeData } from '../api';
import { Container,Stylish } from './StyleSprite';
import Card from './Card';


class Sprites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqSpriteData: []
    };
  }

  async componentDidMount() {
    // get pokemon data that is clicked on
    const spriteData = await getReqPokeData(this.props.match.params.pokeName);
    // put our pokemon sprites in state
    this.setState({ reqSpriteData: spriteData.sprites });
  }
  render() {
    const { reqSpriteData } = this.state;
    //convering to array for mapping with its values
    const sprites = Object.values(reqSpriteData);
    //filtering out sprites that has a value of null
    const availableSprites = sprites.filter(sprite => sprite !== null );
    //if request for pokemon failed error message will be displayed
    if(reqSpriteData.length===0) {
      return (
        <Container>
        <h1>Are you sure *{this.props.match.params.pokeName}* is a pokemon</h1>
        <p>If so, You will see sprites in real quick</p>
        <p>If Not, Please Retry</p>
        <Link to='/'>Go Back</Link>
        </Container>
      )
    }
    return (
      <Container>
      <div>
      <h1>I am {this.props.match.params.pokeName[0].toUpperCase()+this.props.match.params.pokeName.slice(1)}</h1>
      <Link to='/'>Go Back</Link>
      </div>
      <Stylish>
        {availableSprites.map((sprite,index) => (
            <Card key={index}>
              <img src={sprite} alt={this.props.match.params.pokeName} />
            </Card>
      ))}
      </Stylish>
      </Container>
    )
  }
}

export default Sprites;

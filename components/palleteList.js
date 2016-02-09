import React, {Component} from 'react';
import Pallete from './pallete';


export default class PalleteList extends Component {
  render() {
    return (
      <ul id='PalleteList' style={{marginLeft: -40}}>
        {this.props.palletes.map((pallete, index) => {
          return <Pallete key={index} handleClick={this.props.handleClick} pallete={pallete} />
        })}
      </ul>
    )
  }
}

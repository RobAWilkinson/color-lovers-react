import React, {Component} from 'react';


export default class Pallete extends Component {
  handleClick() {
    console.log('click')
    this.props.handleClick(this.props.pallete)
  }
  render() {
    return (
      <li
        onClick={this.handleClick.bind(this)}
        id='Pallete'
        style={{
          marginBottom: 5,
          fontSize: 18
        }}
      >
        {this.props.pallete.title}
      </li>
    )
  }
}

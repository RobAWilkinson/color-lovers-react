import PalleteList from './palleteList'
import React, {Component} from 'react'
import Selected from './selected'
import fetch from 'isomorphic-fetch'
import {render} from 'react-dom';

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { palletes: [], selected: null }
  }

  componentDidMount () {
    fetch('/palletes')
      .then(data => data.json())
      .then(json => {
        this.setState({palletes: json})
      })
  }
  render () {
    return (
      <div className='container' id='App'>
        <div className='col-xs-6'>
          <PalleteList
            handleClick={(pallete) => {
              this.setState({selected: pallete})
            }}
            palletes={this.state.palletes}
          />
        </div>
        <div className='col-xs-6'>
            <Selected selected={this.state.selected}/>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'))

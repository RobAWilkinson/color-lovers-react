import PalleteList from './palleteList'
import React, {Component} from 'react'
import Selected from './selected'
import fetch from 'isomorphic-fetch'
import {render} from 'react-dom'

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
    var selected;
    if(this.state.selected){
      selected = (
        <div className='col-xs-6'>
            <Selected selected={this.state.selected}/>
        </div>);
    }
    return (
      <div className='container' id='App'>
        <div className='col-xs-6 tk-source-sans-pro' >
          <PalleteList
            handleClick={(pallete) => {
              this.setState({selected: pallete})
            }}
            palletes={this.state.palletes}
          />
        </div>
          {selected}
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'))

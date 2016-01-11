import PalleteList from './palleteList'
import React, {Component} from 'react'
import Selected from './selected'
import fetch from 'isomorphic-fetch'
import {render} from 'react-dom'

export default class App extends Component {
  handleDisplay(e) {
    e.preventDefault();
    this.setState({display: true})
  }
  constructor (props) {
    super(props)
    this.state = { display: false, palletes: [], selected: null }
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
    var display;
    if(this.state.selected){
      selected = (
            <Selected selected={this.state.selected}/>);
    }
    if(this.state.display) {
      display = this.state.selected.colors.map(color => <p> {'#' + color}</p>);
    }
    if(this.state.palletes.length){
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1>colorlovers</h1>
              <p>Click a color, try it out</p>
            </div>
          </div>
          <div className="row">
              <div className='col-xs-6 tk-source-sans-pro' >
                <PalleteList
                  handleClick={(pallete) => {
                    this.setState({selected: pallete})
                  }}
                  palletes={this.state.palletes}
                />
              </div>
              <div className='col-xs-6'>
                    {selected}
              </div>
          </div>
          <div className="row" >
            <div className="col-xs-6" >
              Thanks for trying it out
              <br />
              made by <a href="http://twitter.com/robawilkinson" >@robawilkinson</a>
            </div>
        </div>
      </div>
      )
    }
    return (
        <div className="row">
          <div className="col-xs-12">
            <img style={{margin: '0 auto'}} src="spinner.gif">
            </img>
          </div>
        </div>
        );

  }
}

render(<App />, document.getElementById('main-container'))

import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export default class Selected extends Component {
  render () {
    if(!this.props.selected){
      return (<h1> Selected</h1>);
    }
    return(
    <div>
          <ReactCSSTransitionGroup transitionName='example' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      {this.props.selected.colors.map(color => {
        return(
            <div key={color} style={{float: 'left', backgroundColor: color, height: 200, width: 200}} />
            )
      })}
          </ReactCSSTransitionGroup>
    </div>
    );
  }
}

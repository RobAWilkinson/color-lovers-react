import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
var paper = window.paper
export default class Selected extends Component {
  componentDidMount() {
    var myCanvas = document.getElementById('myCanvas');
    paper.setup(myCanvas);
    this.drawer();
  }
  componentDidUpdate() {
    this.drawer();
  }
  drawer() {
        var layer = new paper.Layer()

        // Draw a circle in the center
        var width = paper.view.size.width;
        var circles = []
        var height = paper.view.size.height;
        var timeouts = this.props.selected.colors.forEach((color, index) => {
          window.setTimeout(function() {
          var circle = new paper.Shape.Circle({
              center: [width /2, height /2],
              fillColor: '#' +color,
              radius: 10
          });
          circles.push(circle);
          }, 1);
        })
        var center = new paper.Point(width/2, height/2);
          window.setInterval(function() {
            circles.forEach((circle, index) => {
              if(circle.radius< 40) {
                circle.radius++;
              }
            })
          }, 40)
        paper.view.onFrame = (event) => {
          circles.forEach((circle, index) => {
            if(circle.radius< 40) {
              switch(index) {
                case 0:
                  circle.position.x +=circle.bounds.width / 40
                    break;
                case 1:
                  circle.position.x -=circle.bounds.width / 40
                    break;
                case 2:
                  circle.position.y +=circle.bounds.height / 40
                    break;
                case 3:
                  circle.position.y -=circle.bounds.height / 40
                    break;
                case 4:
                  circle.position.x -=circle.bounds.height / 40
                  circle.position.y +=circle.bounds.height / 40
                case 5:
                  circle.position.x +=circle.bounds.height / 40
                  circle.position.y -=circle.bounds.height / 40
                    break;
                case 6:
                  circle.position.x +=circle.bounds.height / 40
                  circle.position.y -=circle.bounds.height / 40
              }
              if (circle.bounds.left > paper.view.size.width) {
                circle.position.x = -circle.bounds.width;
            }
            }
            if(circle.radius === 40){
              circle.rotate(2, center)
            }
          })
        }
          paper.view.draw();
        // render

  }
  render () {
    if(!this.props.selected){
      return (<div />);
    }
    return(
        <canvas id="myCanvas" resize="true">
        </canvas>
    );
  }
}

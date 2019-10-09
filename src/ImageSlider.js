import React, {Component} from 'react';

export default class ImageSlider extends Component{

  state = {
    currentSlideIndex: 0
  }

  render() {
    return(
      <div className={"something"}>
        <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    )
  }
}

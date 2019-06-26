import React, {Component} from 'react'

export default class Bomb extends Component {

  state = {
    secondsLeft: this.props.initialCount
  }

  subtractSeconds = (event) => {
    setInterval(() => {
      this.setState({secondsLeft: this.state.secondsLeft - 1} )
    }, 1000);
  }

  render() {
    return(
      <div>
      <p onClick={this.subtractSeconds}> {this.state.secondsLeft}, seconds before I go boom!</p>
       </div>
    )
  }

}

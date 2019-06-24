// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const warning = this.state.secondsLeft === 0 ? <h2>Boom!</h2> : <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
    return (
      <div>{warning}</div>
    )

  }
}

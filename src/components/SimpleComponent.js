import React, {Component} from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    let toggleMood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({
      mood: toggleMood
    });
  }

  render(){
    return(
      <div onClick={this.handleClick}><h1>{this.state.mood}</h1></div>
    )
  }
}

export default SimpleComponent;
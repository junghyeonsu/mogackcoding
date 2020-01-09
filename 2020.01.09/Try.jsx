import React , {Component} from 'react';

class Try extends Component {
  render(){
    return(
      <>
      <li>{this.props.jung.tries}</li>
      <li>{this.props.jung.result}</li>
      </>
    );
  }
}

export default Try;

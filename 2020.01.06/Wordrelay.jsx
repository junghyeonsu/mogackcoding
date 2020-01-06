const React = require('react');

class Wordrelay extends React.Component {

  state = {
    word : '정현수',
    value : '',
    result : '',
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length-1] === this.state.value[0]){
      this.setState({
        word : this.state.value,
        value : '',
        result : '정답~!',
      });
    }else{
      this.setState({
        value : '',
        result : '오답~!',
      });
    }
  }

  onChangeInput = (e) => {
    this.setState({ value : e.target.value});
  }

  render() {
    return(
      <React.Fragment>

        <div> {this.state.word} </div>

        <form onSubmit = {this.onSubmitForm}>
          <input value = {this.state.value} onChange = {this.onChangeInput}  />
          <button> 입력!!! </button>
        </form>

        <div>{this.state.result}</div>

      </React.Fragment>
    );
  }
}

module.exports = Wordrelay;

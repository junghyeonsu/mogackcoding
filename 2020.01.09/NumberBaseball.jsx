import React , {PureComponent} from 'react';
import Try from './Try';
// const React = require('react');

function answer(){
  const array = [1,2,3,4,5,6,7,8,9];
  const answer = [];

  for(let i = 0; i<4 ; i++){
    const chosen = array.splice(Math.floor(Math.random() * (9-i)),1)[0];
    answer.push(chosen);
  }
  return answer;
}

class NumberBaseball extends PureComponent{
  state = {
    value : '',
    answer : answer(),
    tries : [],
    result : '',
  }

  onChangeInput = (e) => {
    this.setState({
      value : e.target.value,
    });
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.answer.join(','));
    if(this.state.value === this.state.answer.join('')){
      this.setState({
        result : '홈런',
        tries : [...this.state.tries,{tries : this.state.value, result : ''}],
      });
    }else{
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if(this.state.tries.length >= 9){
        this.setState({
          result : `답틀림, 답은 ${this.state.answer.join(',')} 입니다.`,
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          answer : answer(),
          value : '',
          tries : [],
        });
      }else{
        for(var i = 0; i < 4 ; i++){
          if(answerArray[i] === this.state.answer[i]){
            strike += 1;
          }else if(this.state.answer.includes(answerArray[i])){
            ball += 1;
          }
        }

        this.setState({
          tries : [...this.state.tries,{tries:this.state.value,result:`${strike}스트라이크 , ${ball}볼`}]
        });
      }
    }
  }

  render(){
    return(
      <>
        <div>{this.state.result}</div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" maxLength="4" value={this.state.value} onChange={this.onChangeInput} />
          <button>제출</button>
        </form>

        <div>시도 횟수 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((a) => {
            return (
              <Try key={a.tries,a.result} jung = {a}  />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;

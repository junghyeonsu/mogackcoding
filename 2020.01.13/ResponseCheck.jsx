import React, { Component } from 'react';



class ResponseCheck extends Component {
  state = {
    state : 'waiting',
    message : '클릭해서 시작하세요.',
    result : [],
  }


  timeout = null;
  startTime;
  endTime;


  onClickScreen = () => {
    const {state,message,result} = this.state;

    if(state === 'waiting'){
      this.setState({
        state : 'ready',
        message : '화면이 초록으로 바뀌면 눌러요!',
        result : [],
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state : 'now',
          message : '지금이니!',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000 ) + 2000);

    }else if(state === 'ready'){
      clearTimeout(this.timeout);
      this.setState({
        state : 'waiting',
        message : '너무 성급했어!',
        result : [],
      });

    }else if(state === 'now'){
      this.endTime = new Date();
      this.setState ((prevState) => {
        return {
        state : 'waiting',
        message : '클릭해서 시작하세요.',
        result : [...prevState.result , this.endTime - this.startTime ],
        }
      });
    }
  }

  onReset = () => {
    this.setState ({
      state : 'waiting',
      message : '클릭해서 시작하세요.',
      result : [],
    });
  }

  renderAverage = () => {
    const {state,message,result} = this.state;
    return (
      result.length === 0
      ? null
      : <><div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
    <button onClick ={this.onReset}>리셋</button>
    </>
    );
  };

  render(){
    const {state,message,result} = this.state;
    return(
      <>
       <div id='screen' className = {state} onClick={this.onClickScreen} >
         {message}
       </div>
       {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;

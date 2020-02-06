const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

function startTimer() {
    return {
        type : START_TIMER,
    }
}

function restartTimer() {
    return {
        type : RESTART_TIMER,
    }
}

function addSecond() {
    return {
        type : ADD_SECOND,
    }
}

const TIME_DURATION = 10;

const initalState = {
    isPlaying : false,
    elapsedTime : 0,
    duration : TIME_DURATION,
}

function reducer(state=initalState,action){
    switch(action.type){
        case START_TIMER :
            return applyStartTimer(state);
        case RESTART_TIMER :
            return applyReStartTimer(state);
        case ADD_SECOND :
            return applyAddSecond(state);
        default :
            return state; 
    }
}

function applyStartTimer(state){
    return{
        ...state,
        isPlaying : true,
    }
}

function applyReStartTimer(state){
    return{
        ...state,
        isPlaying : false,
        elapsedTime : 0
    }
}

function applyAddSecond(state){
  if(state.elapsedTime < TIME_DURATION){
      return{
          ...state,
          elapsedTime : state.elapsedTime + 1
      }
  }
  else{
      return{
          ...state,
          isPlaying : false
      }
  }
}

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

export {actionCreators};

export default reducer;
import React, {useState , useRef} from 'react';

const ResponseCheck = () => {
  const [state,setState] = useState('waiting');
  const [message,setMessage] = useState('클릭해서 시작해용~');
  const [result,setResult] = useState([]);
  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if(state === 'waiting'){
      setState('ready');
      setMessage('초록 일 때 클릭!!');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금이야 현수!!');
        startTime.current = new Date();
      },Math.floor(Math.random()*1000)+2000);
    }else if(state === 'ready'){
        clearTimeout(timeout.current);
        setState('waiting');
        setMessage('성급해 현수!!');
        setResult([]);
    }else if(state === 'now'){
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작해용~!!');
      setResult((prevResult) => {
        return [...prevResult , endTime.current - startTime.current];
      });
    }
  }

  return (
    <>
     <div id="screen" className={state} onClick={onClickScreen}>
     {message}
     </div>
     {result.length === 0 ? null : <div>평균 시간 : {result.reduce((a,c)=>a+c) / result.length}ms</div>}
    </>
  );
}



export default ResponseCheck;

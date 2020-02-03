import React, {useCallback} from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

const App = () => {
  const [category, setCategory] = React.useState('all');
  const onSelect = useCallback((category) => {
    return (
      setCategory(category)
    );
  },[])

  return (
    <>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </>
  );
}

export default App;

// const [data,setData] = React.useState(null);
// const onClick = async () => {
//   await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=338bebd61c6c43eebf41ea8ada78d948').then(response => {
//     setData(response.data);
//   })
// }

// return(
//   <div>
//     <div>
//     <button onClick={onClick}>불러오기</button>
//     </div>
//     { data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} /> }
//   </div>
// )
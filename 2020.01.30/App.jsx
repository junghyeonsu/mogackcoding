import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/profile';
import Profiles from './components/profiles';
import HistorySample from './components/HistorySample';
import {Route,Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">홈으로</Link></li>
        <li><Link to="/About">정보</Link></li>
        <li><Link to="/Profiles">프로필</Link></li>
        <li><Link to="/HistorySample">예제</Link></li>
      </ul>
     <Route path= "/" component={Home} exact/>
     <Route path= "/About" component={About} />
     <Route path= "/Profiles" component={Profiles} />
     <Route path= "/HistorySample" component={HistorySample} />
    </div>
  );
}

export default App;

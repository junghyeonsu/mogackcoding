import React from 'react';
import {Route,NavLink} from 'react-router-dom';
import Profile from './profile';

const Profiles = () => {
    const activeStyle = {
        background : 'orange',
        color : 'white',
    }

    console.log(Profile);
    return (
        <div>
        <h3>사용자 목록</h3>
        <ul>
            <li>
                <NavLink activeStyle={activeStyle} to="/profiles/velopert">
                    velopert
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle}to="/profiles/mogackco">
                    mogackco
                </NavLink>
            </li>
        </ul>

        <Route
            path="/profiles"
            exact 
            render={() => <div>사용자를 선택해주세요 </div>}
        />
        <Route path="/profiles/:username" component={Profile} />
    </div>
    );
}

export default Profiles;
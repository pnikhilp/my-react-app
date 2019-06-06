import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...some})=> {
    return(
        <Route {...some} render={(props)=>localStorage.getItem('token')?(<Component {...props} />):(
            <Redirect to={{pathname: '/login',
                           state: {from: props.location}
                         }}
            />)
        }
        />
    )
}

export default PrivateRoute
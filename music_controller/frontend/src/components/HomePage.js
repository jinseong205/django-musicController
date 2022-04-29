import React from 'react';
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"


class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" ><p>This is HomePage</p></Route>
                    <Route path="/join" component={RoomJoinPage}/> 
                    <Route path="/create" component={CreateRoomPage}/>
                </Switch>
            </Router>
            )
    }
}

export default HomePage;
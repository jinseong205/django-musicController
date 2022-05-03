import React, {Component} from 'react';

class Room extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
        };
    }

    render(){
        return <div>
            <p>{this.state.votesToSkip}</p>
            <p>{this.state.votesToSkip}</p>
            <p>{this.state.votesToSkip}</p>
            </div> 
    }
}

export default Room;
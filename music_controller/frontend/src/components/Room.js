import React, { Component } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
    };

    this.roomCode = this.props.match.params.roomCode;
    this.getRoomDetails = this.getRoomDetails.bind(this);
    this.leaveButtonPressed = this.leaveButtonPressed.bind(this); 


    this.getRoomDetails();
  }

  getRoomDetails() {
    let self = this;

    fetch("/api/get-room" + "?code=" + this.roomCode)
      .then((response) => response.json())
      .then((data) => {
        self.setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
  }

  leaveButtonPressed(){

  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Code : {this.roomCode}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Votes : {this.state.votesToSkip}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Guest Can Pause : {this.state.guestCanPause.toString()}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            isHost : {this.state.isHost.toString()}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <Button variant="contained" color="secondary" to="/" component={Link}>
                Leave a Room
            </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Room;

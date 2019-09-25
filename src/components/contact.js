import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Profile2 from "../profile2.png";

class Contact extends Component {
  render() {
    return (
      <div
        className="contact-body"
        style={{ background: "#DAD4DB", color: "black" }}
      >
        <Grid className="contact-grid">
          <Cell col={6}>
            <br></br>
            <br></br>
            <br></br>
            <h2>Tangni Wang</h2>
            <br></br>
            <img src={Profile2} alt="avatar" style={{ height: "250px" }} />
          </Cell>
          <div class="vl"></div>
          <Cell col={6}>
            <br></br>
            <br></br>
            <br></br>
            <h2>Contact Me</h2>
            <br></br>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fas fa-phone-volume" aria-hidden="true" />
                    (831) 419-3981
                  </ListItemContent>
                </ListItem>
                <br></br>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="far fa-envelope" aria-hidden="true" />
                    wangtangni96@gmail.com
                  </ListItemContent>
                </ListItem>
                <br></br>
                <ListItem>
                  <ListItemContent className="contact-text">
                    <i className="fab fa-skype" aria-hidden="true" />
                    wangtangni96
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

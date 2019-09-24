import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../img/profileme.png";

class About extends Component {
  render() {
    return (
      <div>
        <div style={{ background: "#DAD4DB", color: "black" }}>
          <Grid>
            <Cell col={6}>
              <img src={Profile} className="me-img" />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../img/profileme.png";
import { Badge } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div>
        <div style={{ background: "#DAD4DB", color: "black" }}>
          <Grid>
            <Cell col={5}>
              <img src={Profile} className="me-img" />
            </Cell>
            <Cell col={7}>
              <div className="about-text">
                <h1>
                  <Badge variant="danger" className="about-header">
                    ABOUT ME
                  </Badge>
                </h1>
                <h2>
                  <Badge
                    variant="dark"
                    className="about-header"
                    style={{
                      paddingRight: "180px",
                      paddingTop: "35px",
                      paddingBottom: "35px",
                      paddingLeft: "30px"
                    }}
                  >
                    Tanny - Recent Computer Science Graduate
                  </Badge>
                </h2>
                <p>
                  Welcome to the least boring page. My name is Tangni Wang but I
                  go by Tanny as well. Don't hesitate when you see two names
                  with the same face, they are both me. I just recently
                  graduated from University of California, Santa Cruz, majoring
                  in Computer Science. Strangers think I'm quiet. Friends think
                  I'm outgoing. My best friend thinks I'm crazy.
                </p>
                <p>
                  I am very desperate for a job in my major related fields. So
                  if you are a recuiter or you know somone that needs a hard
                  working and not too crazy girl to make you team or your
                  company a little better, PLEASE PLEASE click on the button
                  below to check out my resume and contact me. I am laying on
                  the couch all day just to wait for your call and email. If you
                  want to make my day better and possibly make your day better
                  too, hire me!
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;

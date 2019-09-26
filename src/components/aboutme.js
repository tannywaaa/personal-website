import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../img/profileme.JPG";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";

class About extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  originalAboutMe() {
    return (
      <div>
        <div
          className="contact-body2"
          style={{ background: "#DAD4DB", color: "black" }}
        >
          <Grid>
            <Cell col={6}>
              <img src={Profile} alt="avatar" className="me-img" />
            </Cell>
            <Cell col={6}>
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
                      paddingRight: "150px",
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
                  go by Tanny as well. I just recently graduated from University
                  of California, Santa Cruz, majoring in Computer Science.
                  Strangers think I'm quiet. Friends think I'm outgoing. My best
                  friend thinks I'm crazy.
                  <br></br>
                  <br></br>I seek a stimulating and challenging work environment
                  where I can utilize my passion and software development skills
                  to advance my employer's objectives and build my knowledge of
                  software technologies and applications. If you are a recuiter
                  or you know somone that needs a passionate, hard working and
                  not too crazy girl to join your team, feel free to click on
                  the button below to check out my resume and contact me.
                </p>
                <br></br>
                <Button
                  variant="outline-danger"
                  href="https://www.dropbox.com/s/l8w5nv30lc2ndd2/spring_resume.pdf?dl=0"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    width: "30%",
                    fontSize: " 20px",
                    padding: "10px",
                    marginRight: "30%"
                  }}
                >
                  Hire Me
                </Button>
                <Button
                  variant="outline-danger"
                  href="/contact"
                  style={{
                    width: "30%",
                    fontSize: " 20px",
                    padding: "10px"
                  }}
                >
                  Contact
                </Button>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }

  mobileAboutMe() {
    return (
      <div>
        <h2>Tyler #1</h2>
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      return <div>{this.originalAboutMe()}</div>;
    } else {
      return <div>{this.mobileAboutMe()}</div>;
    }
  }
}

export default About;

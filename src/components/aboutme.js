import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../img/profileme.JPG";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          className="contact-body2 font1 font2 backgroundlight"
          style={{ color: "black" }}
        >
          <Grid>
            <Cell col={5}>
              <img src={Profile} alt="avatar" className="me-img" />
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
                      paddingRight: "100px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      paddingLeft: "20px"
                    }}
                  >
                    Tanny - Recent Computer Science Graduate
                  </Badge>
                </h2>
                <p>
                  Welcome to the least boring page. My name is Tangni Wang, but
                  I go by Tanny. I recently graduated from the University of
                  California, Santa Cruz and received my bachelors in Computer
                  Science. Strangers think I'm quiet. Friends think I'm
                  outgoing. My best friend thinks I'm crazy.
                  <br></br>
                  <br></br>I am seeking a stimulating and challenging work
                  environment where I can utilize my passion and software
                  development skills to advance my employer's objectives and
                  build my knowledge of software technologies and applications.
                  If you are a recuiter or you know somone that needs a
                  passionate and hard working person to join your team, feel
                  free to click on the button below to check out my resume and
                  contact me.
                </p>
                <Button
                  variant="outline-danger"
                  href="https://www.dropbox.com/s/g2anflqr672hsw2/Tanny_Wang.pdf?dl=0"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    width: "30%",
                    fontSize: " 15px",
                    padding: "6px",
                    marginRight: "30%"
                  }}
                >
                  Hire Me
                </Button>
                <Link
                  style={{ fontFamily: "Kalam", color: "white" }}
                  to="/contact"
                >
                  <Button
                    variant="outline-danger"
                    style={{
                      width: "30%",
                      fontSize: " 15px",
                      padding: "6px"
                    }}
                  >
                    Contact
                  </Button>
                </Link>
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
        <div className="backgroundlight" style={{ color: "black" }}>
          <div className="about-text-mobile" style={{ paddingLeft: "10%" }}>
            <div className="text-center">
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
                    paddingRight: "30px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    paddingLeft: "20px"
                  }}
                >
                  Tanny - Recent Computer Science Graduate
                </Badge>
              </h2>
              <p>
                Welcome to the least boring page. My name is Tangni Wang, but I
                go by Tanny. I recently graduated from the University of
                California, Santa Cruz and received my bachelors in Computer
                Science. Strangers think I'm quiet. Friends think I'm outgoing.
                My best friend thinks I'm crazy. I am seeking a stimulating and
                challenging work environment where I can utilize my passion and
                software development skills to advance my employer's objectives
                and build my knowledge of software technologies and
                applications. If you are a recuiter or you know somone that
                needs a passionate and hard working person to join your team,
                feel free to click on the button below to check out my resume
                and contact me.
              </p>
            </div>
            <Button
              variant="outline-danger"
              href="https://www.dropbox.com/s/g2anflqr672hsw2/Tanny_Wang.pdf?dl=0"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                width: "30%",
                fontSize: " 15px",
                padding: "6px",
                marginRight: "30%",
                fontFamily: "Kalam"
              }}
            >
              Hire Me
            </Button>
            <Link style={{ fontFamily: "Kalam", color: "white" }} to="/contact">
              <Button
                variant="outline-danger"
                style={{
                  width: "30%",
                  fontSize: " 15px",
                  padding: "6px"
                }}
              >
                Contact
              </Button>
            </Link>
            <p></p>{" "}
          </div>
        </div>
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

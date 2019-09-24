import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../profile.png";
import { Button } from "react-bootstrap";

class Landing extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.effect = window.VANTA.DOTS({
      el: "#dummy",
      color: 0xff4a,
      color2: 0x0,
      backgroundColor: 0x0,
      spacing: 30.0
    });
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
  render() {
    return (
      <div
        id="dummy"
        className="demo-big-content"
        style={{ width: "100%", height: "802px" }}
      >
        <Grid>
          <Cell col={12}>
            <div className="banner-text">
              <img src={Profile} alt="avatar" className="avatar-img" />
              <h1>Hello, I'm Tanny</h1>
              <h2>Aspiring Software Engineer</h2>
              <p>
                Recent Graduate in Computer Science actively seeking for a job.
                Please stay on the site for as long as you want. If you want to
                help me with my job search, feel free to click on the contact
                button below :)
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <Button
                  style={{
                    width: "30%",
                    fontSize: " 20px",
                    paddingTop: "28px"
                  }}
                  variant="outline-light"
                  href="/contact"
                >
                  CONTACT
                </Button>
                <a
                  href="https://www.linkedin.com/in/tangni-wang/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* Github */}
                <a
                  href="https://github.com/tannywaaa"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;

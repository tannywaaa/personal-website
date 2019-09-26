import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../profile.png";
import { Button } from "react-bootstrap";
import Profile2 from "../profile2.png";

class Landing extends Component {
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

  componentDidMount() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      this.effect = window.VANTA.DOTS({
        el: "#dummy",
        color: 0xff4a,
        color2: 0x0,
        backgroundColor: 0x0,
        spacing: 30.0
      });
    } else {
      this.effect = window.VANTA.CLOUDS({
        el: "#dummy",
        color: 0xff4a,
        color2: 0x0,
        backgroundColor: 0x0,
        spacing: 30.0
      });
    }
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }

  defaultView() {
    return (
      <div className="contact-body2" style={{ height: "100%", width: "100%" }}>
        <div
          id="dummy"
          className="demo-big-content"
          style={{ height: "100%", width: "100%" }}
        >
          <Grid>
            <Cell col={12}>
              <div className="banner-text">
                <img src={Profile} alt="avatar" className="avatar-img" />
                <h1>Hello, I'm Tanny</h1>
                <h2>Aspiring Software Engineer</h2>
                <p>
                  Recent Graduate in Computer Science actively seeking for a
                  job. Please stay on the site for as long as you want. If you
                  want to help me with my job search, feel free to click on the
                  contact button below :)
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
                  {/* resume */}
                  <a
                    href="https://www.dropbox.com/s/l8w5nv30lc2ndd2/spring_resume.pdf?dl=0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fas fa-user-tag"></i>
                  </a>
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
      </div>
    );
  }

  mobileVersion() {
    return (
      <div className="contact-bodyM">
        <div id="dummy" style={{ width: "100%", height: "100%" }}>
          <Grid>
            <Cell col={12}>
              <div className="banner-text-mobile">
                <img
                  src={Profile2}
                  alt="avatar"
                  className="avatar-img-mobile"
                />
                <h1>Hello, I'm Tanny</h1>
                <h2>Aspiring Software Engineer</h2>
                <p>
                  Recent Graduate in Computer Science actively seeking for a
                  job. Please stay on the site for as long as you want. If you
                  want to help me with my job search, feel free to click on the
                  contact button below :)
                </p>

                <div className="social-links-mobile">
                  {/* LinkedIn */}
                  <Button
                    style={{
                      fontSize: " 15px",
                      paddingTop: "10px",
                      marginRight: "15px"
                    }}
                    variant="outline-light"
                    href="/contact"
                  >
                    CONTACT
                  </Button>
                  {/* resume */}
                  <a
                    href="https://www.dropbox.com/s/l8w5nv30lc2ndd2/spring_resume.pdf?dl=0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fas fa-user-tag"></i>
                  </a>
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
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      return <div>{this.defaultView()}</div>;
    } else {
      return <div>{this.mobileVersion()}</div>;
    }
  }
}

export default Landing;

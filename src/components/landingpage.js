import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile2 from "../img/mobile-profile.png";

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
    // if (!isMobile) {
    //   this.effect = window.VANTA.DOTS({
    //     el: "#dummy",
    //     color: 0xff4a,
    //     color2: 0x0,
    //     backgroundColor: 0x0,
    //     spacing: 30.0
    //   });
    if (!isMobile) {
      this.effect = window.VANTA.CLOUDS({
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
                <img src={Profile2} className="avatar-img box bounce-7 stage" />
                <Cell col={6}>
                  <h1>Hello , I'm Tanny.</h1>
                </Cell>
                <br />
                <h2>Aspiring Software Engineer</h2>
                <Cell col={8}>
                  <p>
                    Recent Graduate in Computer Science actively seeking a job.
                    Stay on this website for as long as you want. If you want to
                    contact me, feel free to click on the contact button below.
                  </p>
                </Cell>
                <br />
                <div className="social-links">
                  {/* LinkedIn */}
                  {/* <Link
                    style={{ fontFamily: "Kalam", color: "white" }}
                    to="/contact"
                  >
                    <Button
                      style={{
                        fontSize: " 20px",
                        paddingTop: "28px"
                      }}
                      variant="outline-dark"
                    >
                      CONTACT
                    </Button>
                  </Link> */}
                  <a href="/contact" rel="noopener noreferrer" target="_blank">
                    <i class="far fa-address-card" />
                  </a>

                  {/* resume */}
                  <a
                    href="https://www.dropbox.com/s/pm6dpxk8dw3vejw/Tangni-Wang-l2.pdf?dl=0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="far fa-save" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tangni-wang/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  {/* Github */}
                  <a
                    href="https://github.com/tannywaaa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
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
              <div className="banner-text-mobile" style={{ marginTop: "15%" }}>
                <img
                  style={{
                    textAlign: "center",
                    height: "180px",
                    width: "150px"
                  }}
                  src={Profile2}
                  className="avatar-img-mobile box bounce-7 stage"
                />
                <center>
                  <h1>Hello, I'm Tanny.</h1>
                  <br></br>
                  <h2>Aspiring Software Engineer</h2>
                  <p>
                    Recent Graduate in Computer Science actively seeking a job.
                    Stay on this website for as long as you want. If you want to
                    contact me, feel free to click on the contact button below.
                  </p>
                </center>
                <div
                  className="social-links-mobile"
                  style={{ marginLeft: "10%" }}
                >
                  {/* LinkedIn */}
                  {/* <Link
                    style={{ fontFamily: "Kalam", color: "white" }}
                    to="/contact"
                  >
                    <Button
                      style={{
                        fontSize: " 15px",
                        paddingTop: "18px",
                        marginRight: "15px"
                      }}
                      variant="secondary"
                      href="/contact"
                    >
                      CONTACT
                    </Button>
                  </Link> */}
                  {/* resume */}
                  <a href="/contact" rel="noopener noreferrer" target="_blank">
                    <i class="far fa-address-card" />
                  </a>

                  {/* resume */}
                  <a
                    href="https://www.dropbox.com/s/pm6dpxk8dw3vejw/Tangni-Wang-l2.pdf?dl=0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i
                      // onMouseOver={(e)=> {e.ele}}
                      class="far fa-save"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tangni-wang/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  {/* Github */}
                  <a
                    href="https://github.com/tannywaaa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
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

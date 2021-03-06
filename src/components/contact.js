import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Profile2 from "../img/profile2.png";
import Mobile from "../img/contact-mobile.png";

class Contact extends Component {
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

  originalContact() {
    return (
      <div
        className="contact-body backgroundlight"
        style={{ color: "black", paddingTop: "7%" }}
      >
        <Grid className="contact-grid">
          <Cell col={6}>
            <br></br>
            <br></br>
            <br></br>
            <h2>Tanny Wang</h2>
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
  mobileContact() {
    return (
      <div
        className="contact-body backgroundlight"
        style={{ color: "black", paddingTop: "15%" }}
      >
        <Grid className="contact-grid">
          <h2>CONTACT ME</h2>
          <br></br>
          <img src={Mobile} alt="avatar" style={{ height: "200px" }} />

          <div className="contact-list-mobile">
            <List>
              <ListItem>
                <ListItemContent className="contact-text-mobile">
                  <i className="fas fa-phone-volume" aria-hidden="true" />
                  (831) 419-3981
                </ListItemContent>
              </ListItem>
              <br></br>
              <ListItem>
                <ListItemContent className="contact-text-mobile">
                  <i className="far fa-envelope" aria-hidden="true" />
                  wangtangni96@gmail.com
                </ListItemContent>
              </ListItem>
              <br></br>
              <ListItem>
                <ListItemContent className="contact-text-mobile">
                  <i className="fab fa-skype" aria-hidden="true" />
                  wangtangni96
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Grid>
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      return <div>{this.originalContact()}</div>;
    } else {
      return <div>{this.mobileContact()}</div>;
    }
  }
}

export default Contact;

import React, { Component } from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }
  static defaultProps = {
    icon: "fas fa-home"
  };

  defaultView() {
    return (
      <div className="demo-big-content">
        <Layout>
          <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <a
              className="navbar-brand"
              style={{ padding: "0 43% 0 13%" }}
              href="/"
            >
              <i className="fas fa-home" /> HOME
            </a>

            <div className="">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link className="nav-link " to="/resume">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/aboutme">
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
  mobileVersion() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Drawer
            style={{ backgroundColor: "#2373A9" }}
            className="header-color-background"
            title={
              <Link style={{ fontFamily: "Pangolin", color: "white" }} to="/">
                Home
              </Link>
            }
          >
            <Navigation>
              <Link
                style={{ fontFamily: "Pangolin", color: "white" }}
                to="/resume"
              >
                Resume
              </Link>
              <Link
                style={{ fontFamily: "Pangolin", color: "white" }}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                style={{ fontFamily: "Pangolin", color: "white" }}
                to="/aboutme"
              >
                About Me
              </Link>
              <Link
                style={{ fontFamily: "Pangolin", color: "white" }}
                to="/contact"
              >
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
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

export default App;

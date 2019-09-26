import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  static defaultProps = {
    icon: "fas fa-home"
  };

  render() {
    return (
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Kalam"
              }}
              to="/"
            >
              Home
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          style={{ backgroundColor: "#493f3f" }}
          className="header-color-background"
          title={
            <Link style={{ fontFamily: "Kalam", color: "white" }} to="/">
              Home
            </Link>
          }
        >
          <Navigation>
            <Link style={{ fontFamily: "Kalam", color: "white" }} to="/resume">
              Resume
            </Link>
            <Link
              style={{ fontFamily: "Kalam", color: "white" }}
              to="/projects"
            >
              Projects
            </Link>
            <Link style={{ fontFamily: "Kalam", color: "white" }} to="/aboutme">
              About Me
            </Link>
            <Link style={{ fontFamily: "Kalam", color: "white" }} to="/contact">
              Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

export class NavBar extends Component {
  render() {
    return (
      //   <div className="navbar bg-primary">
      //     <h1>
      //       <i className="fas fa-home" /> {this.props.title}
      //     </h1>
      //   </div>

      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;

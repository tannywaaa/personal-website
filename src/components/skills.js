import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  rate = () => {
    if (this.props.progress == null) {
      return;
    }
    let array = [];
    for (let i = 1; i <= 5; i++) {
      if (this.props.progress < i) {
        array.push(<span class="fa fa-star" />);
      } else {
        array.push(<span class="fa fa-star checked" />);
      }
    }
    return array;
  };
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex" }}>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            &nbsp;&nbsp;
            <b>{this.props.skill}</b>
            {/* <ProgressBar
              style={{
                paddingTop: "4%",
                width: "50%",
                margin: "auto"
              }}
              progress={this.props.progress}
            />{" "} */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {this.rate()}
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;

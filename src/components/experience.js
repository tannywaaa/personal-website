import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={2}>
          <p>
            {this.props.startMonth} - {this.props.endMonth} . {this.props.year}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
          <p>
            {this.props.jobDescription1} <br></br>
            {this.props.jobDescription2} <br></br>
            {this.props.link}
          </p>
        </Cell>
        <Cell col={2}>
          <p>{this.props.location}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;

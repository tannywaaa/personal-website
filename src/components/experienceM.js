import React, { Component } from "react";
import { Grid } from "react-mdl";

class ExperienceM extends Component {
  render() {
    return (
      <Grid>
        <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
        <p>
          {this.props.startMonth} - {this.props.endMonth} . {this.props.year},{" "}
          {this.props.locationM}
        </p>
        <p>
          {this.props.jobDescription1} <br></br>
          {this.props.jobDescription2} <br></br>
          {this.props.link}
        </p>
      </Grid>
    );
  }
}
export default ExperienceM;

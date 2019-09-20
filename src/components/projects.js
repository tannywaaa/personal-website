import React, { Component } from "react";
import Summer from "../summer.JPG";
import portfolio1 from "../img/portfolio-1.jpg";
import portfolio2 from "../img/portfolio-2.jpg";
import portfolio3 from "../img/portfolio-3.jpg";
import portfolio4 from "../img/portfolio-4.jpg";
import { Button } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <div style={{ background: "#DAD5DB", color: "black" }}>
        <div className="image-container">
          <img src={Summer} alt="avatar" className="background-image" />
          <div class="content-section-heading">
            <h2 class="centered">Projects</h2>
          </div>
        </div>
        <section class="content-section" id="portfolio">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://github.com/tonyman316/Become_a_Top_Airbnb_Earner"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <h2 className="font">Become A Top Airbnb Earner</h2>
                      <p class="mb-0">
                        This project used AI models to analyze Airbnb data and
                        study the factors for host to become a top earner.
                      </p>
                      <Button
                        style={{
                          width: "30%",
                          fontSize: " 10px",
                          marginTop: "10px"
                        }}
                        variant="outline-light"
                        href="#p1"
                      >
                        Read More
                      </Button>
                    </span>
                  </span>
                  <img class="img-fluid" src={portfolio1} alt="" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://github.com/chdgriff/gigsapp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <h2 className="font">Gigs</h2>
                      <p class="mb-0">
                        The website is an online platform that connects gigs
                        employers and employees.
                      </p>
                      <Button
                        style={{
                          width: "30%",
                          fontSize: " 10px",
                          marginTop: "10px"
                        }}
                        variant="outline-light"
                        href="#p2"
                      >
                        Read More
                      </Button>
                    </span>
                  </span>
                  <img class="img-fluid" src={portfolio2} alt="" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://github.com/ktbeck/Treeki"
                  target="_blank"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <h2 className="font">Treeki</h2>
                      <p class="mb-0">
                        The app asks the user a daily question, and repeats
                        questions yearly which allows the user to see how
                        they've grown over the years.
                      </p>
                      <Button
                        style={{
                          width: "30%",
                          fontSize: " 10px",
                          marginTop: "10px"
                        }}
                        variant="outline-light"
                        href="#p3"
                      >
                        Read More
                      </Button>
                    </span>
                  </span>
                  <img class="img-fluid" src={portfolio3} alt="" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://github.com/AlexSm9/Spr2018_WebApp_Group_Project"
                  target="_blank"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <h2 className="font">Lecture Poll</h2>
                      <p class="mb-0">
                        This website let teachers to create poll questions and
                        let students to input responses.
                      </p>
                      <Button
                        style={{
                          width: "30%",
                          fontSize: " 10px",
                          marginTop: "10px"
                        }}
                        variant="outline-light"
                        href="#p4"
                      >
                        Read More
                      </Button>
                    </span>
                  </span>
                  <img class="img-fluid" src={portfolio4} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>{" "}
        <h2 id="p1">project 1</h2>
        <h2 id="p2">project 2</h2>
        <h2 id="p3">project 3</h2>
        <h2 id="p4">project 4</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
// import Summer from "../summer.jpg";
import portfolio1 from "../img/portfolio-1.jpg";
import portfolio2 from "../img/portfolio-2.jpg";
import portfolio3 from "../img/portfolio-3.jpg";
import portfolio4 from "../img/portfolio-4.png";
import gigs from "../img/gigs.png";
import { Button, Card } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div>
        <div
          style={{ background: "#DAD4DB", color: "black", paddingTop: "5%" }}
        >
          <div class="container">
            <br></br>

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
                        rel="noopener noreferrer"
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
                  href="https://gigsapp-115.herokuapp.com"
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
                  href="https://www.youtube.com/watch?v=-m2fkFefGNk"
                  rel="noopener noreferrer"
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
                  href="https://tanny.pythonanywhere.com/finalversion2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <h2 className="font">Lecture Poll</h2>
                      <p class="mb-0">
                        A web application for quick-and-easy poll questions.
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
          <br></br>

          <div style={{ background: "#493f3f", color: "black" }}>
            <div className="container">
              <section class="content-section">
                <h3 id="p1">
                  <Card>
                    <Card.Header style={{ background: "#DAD4DB" }}>
                      Become A Top Airbnb Earner
                    </Card.Header>
                    <Card.Body style={{ background: "#ECE5ED" }}>
                      <p>
                        The goal for this project was to make recommandations
                        for the low earner hosts and make their listings more
                        profitable and gain more revenue than before.
                      </p>
                      <p>My work:</p>
                      <p>
                        - Analyzed the provided Seattle Airbnb data, separated
                        data into training and testing sets and calculated top
                        and low performers thresholds
                        <br></br>- Applied a stretch method Bayesian Ridge
                        Regression and generated dot graph{" "}
                      </p>
                      <p>What we used:</p>
                      <p>
                        -Language:Python<br></br>-Communication: Github, Jupyter
                        Notebook, Google Drive<br></br>-Data: Seattle Airbnb
                        Open Data
                        <br></br>
                        -Equation/ New feature: new_score_reviews =
                        (reviews_per_month * review_scores_rating)/10<br></br>
                        -Baseline Model: Dummy Regression<br></br>-Stretch
                        Model: Linear Regression,Linear Regression with cross
                        validation(cv),Lasso Regression, Bayesian Regression and
                        Random Forest Regression<br></br>
                        Conclusion: Based on coefficient of each feature from
                        linear regression model, and features importances in
                        Random Forest Regression, we concluded with 9 features
                        that affects Airbnb performers' earnings.
                      </p>
                      <div class="d-flex justify-content-around">
                        <Button
                          variant="outline-secondary"
                          href="https://github.com/tonyman316/Become_a_Top_Airbnb_Earner"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </h3>
                <br></br>
                <h3 id="p2">
                  <Card>
                    <Card.Header style={{ background: "#DAD4DB" }}>
                      Gigs
                    </Card.Header>
                    <Card.Body style={{ background: "#ECE5ED" }}>
                      <p>
                        Gigs is an online platform that connects gigs employers
                        and workers. Gigs employers and workers have to setup
                        their profiles to build their reputation and
                        trustfulness. Workers can post review and rate their
                        employers and vice versa.
                      </p>
                      <p>My work:</p>
                      <p>
                        - Designed and developed the front end for the website
                        includes home page, post related pages, job request
                        pages and proﬁle related pages
                        <br></br>- Developed the proﬁle pages with creating
                        proﬁle, editing proﬁle and view other users' public
                        proﬁle information. Created the user database and
                        connected with proﬁle pages{" "}
                      </p>
                      <Grid>
                        <Cell col={6}>
                          <p>Why does it matter?</p>
                          <p>
                            - Employers can build good profolio so they can hire
                            people easier.
                            <br></br>- Workers have less protection working on
                            Gigs.
                            <br></br>- Workers can report scam and help each
                            other to avoid being scammed.
                          </p>
                          <p>What we used:</p>
                          <p>
                            -Language:HTML, CSS, Javascript, Ruby Gems,
                            PostgreSQL
                            <br></br>-Framework: Ruby on Rails, Heroku<br></br>
                            -Communication: Github, Slack, Trello, Google Drive
                          </p>
                        </Cell>
                        <Cell col={6}>
                          <p>Website Overview:</p>
                          <img
                            class="img-fluid"
                            style={{ width: "70%", height: "70%" }}
                            src={gigs}
                            alt=""
                          />
                        </Cell>
                      </Grid>
                      <div class="d-flex justify-content-around">
                        <Button
                          variant="outline-secondary"
                          href="https://github.com/chdgriff/gigsapp"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          variant="outline-secondary"
                          href="https://gigsapp-115.herokuapp.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Web Demo
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </h3>
                <br></br>
                <h3 id="p3">
                  <Card>
                    <Card.Header style={{ background: "#DAD4DB" }}>
                      Treeki
                    </Card.Header>
                    <Card.Body style={{ background: "#ECE5ED" }}>
                      <p>
                        Treeki is an Android app that asks users a random
                        question every day of the year, and the question will
                        repeat every year. In this way, users can see how their
                        answers change every year and how they evolve as a
                        person. Of course, on top of this, users can also use
                        the app as a normal diary app.
                      </p>
                      <p>My work:</p>
                      <p>
                        - Developed login, register by storing user information
                        into database by using Firebase
                        <br></br>- Developed friends lists features such as
                        searching friends from all users, adding friends with
                        email and viewing friends' posts{" "}
                      </p>
                      <p>More details about out app:</p>
                      <p>
                        -The purpose of our application Treeki is to allow users
                        to see how they evolve as a person. One question will be
                        asked every day of the year, and the questions and
                        answers of the previous years will reappear on the same
                        date, allowing users to see how they change over time.
                        Our application will also have a journal function, which
                        is essentially a personal diary, to allow users to
                        record events, feelings, thoughts, etc. for that day.
                        The user can also add their friends to the journal and
                        share their answers and journals to their friends if
                        they choose to have them public. If the user properly
                        uses the app, it will serve as a personal time capsule
                        to see how they grow as a person, to see how their
                        viewpoints differ from their friends, and to create a
                        fun, mindful experience that can be enjoyed everyday.
                      </p>
                      <p>What we used:</p>
                      <p>
                        -Language: Java, XML, Android<br></br>-Communication:
                        Github, Google Drive
                        <br></br>Framework: Android Studio
                      </p>
                      <div class="d-flex justify-content-around">
                        <Button
                          variant="outline-secondary"
                          href="https://github.com/ktbeck/Treeki"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          variant="outline-secondary"
                          href="https://www.youtube.com/watch?v=-m2fkFefGNk"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Video Demo
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </h3>
                <br></br>
                <h3 id="p4">
                  <Card>
                    <Card.Header style={{ background: "#DAD4DB" }}>
                      Lecture Poll
                    </Card.Header>
                    <Card.Body style={{ background: "#ECE5ED" }}>
                      <p>
                        The idea of this website is to allow instructors to
                        quickly and easily poll people for answers on test
                        questions, quiz problems, or any other multiple-choice
                        questions the user may want to ask their audience.
                      </p>
                      <p>My work:</p>
                      <p>
                        - Developed and designed the front end for the website{" "}
                        <br></br>- Developed past question page that stores the
                        old quizzes and sort them in order{" "}
                      </p>
                      <p>How does it work:</p>
                      <p>
                        - LecturePoll allows a user to create a poll with any
                        question and any number of potential answers.<br></br>-
                        Once the poll has been created, any user can access the
                        link, either by QR code or by link code.<br></br>- A
                        user who has the poll link can then submit their own
                        answer to the poll.
                        <br></br>- Any answers made by a user accessing the site
                        are updated to the poll creator’s chart in real time.
                        <br></br>- At any time, the poll creator can hide the
                        chart or the room code, or close their poll to
                        responses.
                        <br></br>- From a logged-in user’s profile page, the
                        user can also access any polls they have created
                        recently.
                      </p>
                      <p>What we used:</p>
                      <p>
                        -Language: HTML, CSS, JavaScript<br></br>-Communication:
                        Github, Discord, Google Drive
                        <br></br>Framework: Web2Py, Anaconda, jQuery, Vue.js,
                        D3.js, QRCode.js, Pythonanywhere
                      </p>
                      <div class="d-flex justify-content-around">
                        <Button
                          variant="outline-secondary"
                          href="https://github.com/AlexSm9/Spr2018_WebApp_Group_Project"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </Button>
                        <Button
                          variant="outline-secondary"
                          href="https://tanny.pythonanywhere.com/finalversion2"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Web Demo
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </h3>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import portfolio1 from "../img/portfolio-1.jpg";
import portfolio2 from "../img/portfolio-2.jpg";
import portfolio3 from "../img/portfolio-3.jpg";
import portfolio4 from "../img/portfolio-4.png";
import portfolio5 from "../img/portfolio-5.jpg";
import gigs from "../img/gigs.png";
import { Button, Modal, ButtonToolbar, Row, Col } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";

class Projects extends Component {
  render() {
    // prep
    function PrepReadMore() {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button
            style={{
              width: "30%",
              fontSize: " 10px",
              marginTop: "10px"
            }}
            variant="outline-light"
            rel="noopener noreferrer"
            onClick={() => setModalShow(true)}
          >
            Read More
          </Button>

          <PrepModal show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
      );
    }
    function PrepModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="font2 cardbackgroundlight">
            <Modal.Header closeButton className="backgroundlight">
              <Modal.Title id="contained-modal-title-vcenter">
                Prep To Your Door
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Overview</h4>
              <p>
                Prep To Your Door is an online platform that allows users to
                sebscribe and get healthy food delivering to the door in their
                home state of Texas. Save people time, serve them healthy food,
                support local food systems, and build a business that respects
                the environment.
              </p>
              <h4>My Work</h4>
              <p>
                – Lead frontend developer for web eCommerce platform. Assessed
                UX and UI designs for technical feasibility
                <br></br>– Implemented platform and client site user interface
                using Javascript, ReactJs, CSS, HTML5, Bootstrap, Material-UI
                and FontAwesome
                <br></br>– Developed a NodeJS web application using ReactJS,
                helped to connect client and server with REST APIs using Flask.
                <p>Team size: 11 </p>
              </p>
              <h4>Components</h4>
              <p>
                – Client site is the main page that includes a brief information
                about the company, meals information and subscription plans.
                Customers can register for an account, view the meals, subscribe
                a meal plan and select meals for the next 6 weeks. <br></br>–
                Admin site displays to the workers in the kitchen with
                information and graphs for meals,ingredients, profit,
                deliverying, customer information, user map and functionality to
                create/edit meal and menus. <br></br>– Algorithms to find the
                shortest path for driver to deliver food.
              </p>
              <h4>Github Repo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/infinite-options/Prep-To-Your-Door"
              >
                https://github.com/infinite-options/Prep-To-Your-Door
              </a>
              <h4>Web Demo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://preptoyourdoor.netlify.com/"
              >
                https://preptoyourdoor.netlify.com/
              </a>
              <br />
              <br />
              <Divider variant="middle" />
              <br />
              <h4>What we used:</h4>
              <h6>Language:</h6>
              <Chip label="ReactJS" />
              &nbsp;&nbsp;
              <Chip label="Python" />
              &nbsp;&nbsp;
              <Chip label="JavaScript" />
              &nbsp;&nbsp;
              <Chip label="HTML5" />
              &nbsp;&nbsp;
              <Chip label="CSS" />
              &nbsp;&nbsp;
              <Chip label="MySQL" />
              <br />
              <br />
              <h6>Framework:</h6>
              <Chip label="Github" />
              &nbsp;&nbsp;
              <Chip label="Bootstrap" />
              &nbsp;&nbsp;
              <Chip label="Material-UI" />
              &nbsp;&nbsp;
              <Chip label="Flask" />
              &nbsp;&nbsp;
              <Chip label="AWS" />
              &nbsp;&nbsp;
              <Chip label="REST API" />
              &nbsp;&nbsp;
              <Chip label="FontAwesome" />
              &nbsp;&nbsp;
              <Chip label="NodeJS" />
              &nbsp;&nbsp;
              <Chip label="MySQL Workbench" />
              &nbsp;&nbsp;
              <Chip label="Netlify" />
              &nbsp;&nbsp;
              <Chip label="draw.io" />
              &nbsp;&nbsp;
              <Chip label="Google Drive/ hangout" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      );
    }

    // airbnb
    function AirbnbReadMore() {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button
            style={{
              width: "30%",
              fontSize: " 10px",
              marginTop: "10px"
            }}
            variant="outline-light"
            rel="noopener noreferrer"
            onClick={() => setModalShow(true)}
          >
            Read More
          </Button>

          <AirbnbModal show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
      );
    }
    function AirbnbModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="font2 cardbackgroundlight">
            <Modal.Header closeButton className="backgroundlight">
              <Modal.Title id="contained-modal-title-vcenter">
                Become A Top Airbnb Earner
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Overview</h4>
              <p>
                The goal for this project was to make recommandations for the
                low earner hosts and make their listings more profitable and
                gain more revenue than before.
              </p>

              <h4>My Work</h4>
              <p>
                - Analyzed the provided Seattle Airbnb data, separated data into
                training and testing sets and calculated top and low performers
                thresholds.
                <br></br>- Applied a stretch method Bayesian Ridge Regression
                and generated dot graph.
                <p>Team size: 3 </p>
              </p>
              <h4>Conclusion</h4>
              <p>
                Based on coefficient of each feature from linear regression
                model, and features importances in Random Forest Regression, we
                concluded with 9 features that affects Airbnb performers'
                earnings.
              </p>
              <h4>Github Repo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/tonyman316/Become_a_Top_Airbnb_Earner"
              >
                https://github.com/tonyman316/Become_a_Top_Airbnb_Earner
              </a>
              <br />
              <br />
              <Divider variant="middle" />
              <br />
              <h4>What we used:</h4>
              <Row>
                <Col>
                  <h6>Language:</h6>
                  <Chip label="Python" />
                </Col>
                <Col xs={6}>
                  <h6>Communication:</h6>
                  <Chip label="Github" />
                  &nbsp;&nbsp;
                  <Chip label="Jupyter Notebook" />
                  &nbsp;&nbsp;
                  <Chip label="Google Drive" />
                </Col>
                <Col>
                  <h6>Data:</h6>
                  <Chip label="Seattle Airbnb Open Data" />
                </Col>
              </Row>
              <br />
              <h6>Equation/ New feature:</h6>
              <Chip label="new_score_reviews = (reviews_per_month * review_scores_rating)/10" />
              <br />
              <br />
              <Row>
                <Col>
                  <h6>Baseline Model:</h6>
                  <Chip label="Dummy Regression" />
                </Col>
                <Col xs={9} style={{ lineHeight: "20px" }}>
                  <h6>Stretch Model:</h6>
                  <Chip label="Linear Regression" />
                  &nbsp;&nbsp;
                  <Chip label="Linear Regression with cross validation(cv)" />
                  &nbsp;&nbsp;
                  <Chip label="Lasso Regression" />
                  &nbsp;&nbsp;
                  <Chip label="Bayesian Regression" />
                  &nbsp;&nbsp;
                  <Chip label="Random Forest Regression" />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      );
    }

    // gigs
    function GigsReadMore() {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button
            style={{
              width: "30%",
              fontSize: " 10px",
              marginTop: "10px"
            }}
            variant="outline-light"
            rel="noopener noreferrer"
            onClick={() => setModalShow(true)}
          >
            Read More
          </Button>

          <GigsModal show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
      );
    }
    function GigsModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="font2 cardbackgroundlight">
            <Modal.Header closeButton className="backgroundlight">
              <Modal.Title id="contained-modal-title-vcenter">Gigs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Overview</h4>
              <p>
                Gigs is an online platform that connects gigs employers and
                workers. Gigs employers and workers have to setup their profiles
                to build their reputation and trustfulness. Workers can post
                review and rate their employers and vice versa.
              </p>

              <h4>My Work</h4>
              <p>
                - Designed and developed the front end for the website includes
                home page, post related pages, job request pages and proﬁle
                related pages.
                <br></br>- Developed the proﬁle pages with creating proﬁle,
                editing proﬁle and view other users' public proﬁle information.
                Created the user database and connected with proﬁle pages.
                <p>Team size: 5 </p>
              </p>
              <Row>
                <Col>
                  <h4>Why Does it Matter?</h4>
                  <p>
                    - Employers can build good profolio so they can hire people
                    easier.
                    <br></br>- Workers have less protection working on Gigs.
                    <br></br>- Workers can report scam and help each other to
                    avoid being scammed.
                  </p>

                  <h4>Web Demo:</h4>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://gigsapp-115.herokuapp.com"
                  >
                    https://gigsapp-115.herokuapp.com
                  </a>
                  <h4>Github Repo:</h4>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/chdgriff/gigsapp"
                  >
                    https://github.com/chdgriff/gigsapp
                  </a>
                </Col>
                <Col>
                  <h4>Website Overview:</h4>
                  <img
                    className="img-fluid"
                    style={{ width: "80%", height: "80%" }}
                    src={gigs}
                    alt=""
                  />
                </Col>
              </Row>
              <br />
              <Divider variant="middle" />
              <br />
              <h4>What we used:</h4>
              <Row>
                <Col>
                  <h6>Language:</h6>
                  <Chip label="HTML" />
                  &nbsp;&nbsp;
                  <Chip label="CSS" />
                  &nbsp;&nbsp;
                  <Chip label="JavaScript" />
                  &nbsp;&nbsp;
                  <Chip label="Ruby Gems" />
                  &nbsp;&nbsp;
                  <Chip label="PostgreSQL" />
                </Col>
                <Col>
                  <h6>Framework:</h6>
                  <Chip label="Ruby on Rails" />
                  &nbsp;&nbsp;
                  <Chip label="Heroku" />
                </Col>
                <Col>
                  <h6>Communication:</h6>
                  <Chip label="Github" />
                  &nbsp;&nbsp;
                  <Chip label="Slack" />
                  &nbsp;&nbsp;
                  <Chip label="Trello" />
                  &nbsp;&nbsp;
                  <Chip label="Google Drive" />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      );
    }

    // Treeki
    function TreekiReadMore() {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button
            style={{
              width: "30%",
              fontSize: " 10px",
              marginTop: "10px"
            }}
            variant="outline-light"
            rel="noopener noreferrer"
            onClick={() => setModalShow(true)}
          >
            Read More
          </Button>

          <TreekiModal show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
      );
    }
    function TreekiModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="font2 cardbackgroundlight">
            <Modal.Header closeButton className="backgroundlight">
              <Modal.Title id="contained-modal-title-vcenter">
                Treeki
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Overview</h4>
              <p>
                Treeki is an Android app that asks users a random question every
                day of the year, and the question will repeat every year. In
                this way, users can see how their answers change every year and
                how they evolve as a person. Of course, on top of this, users
                can also use the app as a normal diary app.
              </p>

              <h4>My Work</h4>
              <p>
                - Developed login, register by storing user information into
                database by using Firebase.
                <br></br>- Developed friends lists features such as searching
                friends from all users, adding friends with email and viewing
                friends' posts.
                <p>Team size: 5 </p>
              </p>
              <h4>More details about out app:</h4>
              <p>
                The purpose of our application Treeki is to allow users to see
                how they evolve as a person. One question will be asked every
                day of the year, and the questions and answers of the previous
                years will reappear on the same date, allowing users to see how
                they change over time. <br />
                Our application will also have a journal function, which is
                essentially a personal diary, to allow users to record events,
                feelings, thoughts, etc. for that day. The user can also add
                their friends to the journal and share their answers and
                journals to their friends if they choose to have them public. If
                the user properly uses the app, it will serve as a personal time
                capsule to see how they grow as a person, to see how their
                viewpoints differ from their friends, and to create a fun,
                mindful experience that can be enjoyed everyday.
              </p>
              <h4>Video Demo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=-m2fkFefGNk"
              >
                https://www.youtube.com/watch?v=-m2fkFefGNk
              </a>
              <h4>Github Repo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ktbeck/Treeki"
              >
                https://github.com/ktbeck/Treeki
              </a>
              <br />
              <br />
              <Divider variant="middle" />
              <br />
              <h4>What we used:</h4>
              <Row>
                <Col>
                  <h6>Language:</h6>
                  <Chip label="Java" />
                  &nbsp;&nbsp;
                  <Chip label="XML" />
                  &nbsp;&nbsp;
                  <Chip label="Android" />
                </Col>
                <Col>
                  <h6>Framework:</h6>
                  <Chip label="Android Studio" />
                </Col>
                <Col>
                  <h6>Communication:</h6>
                  <Chip label="Github" />
                  &nbsp;&nbsp;
                  <Chip label="Google Drive" />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      );
    }

    // Lecture Poll

    function LectureReadMore() {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button
            style={{
              width: "30%",
              fontSize: " 10px",
              marginTop: "10px"
            }}
            variant="outline-light"
            rel="noopener noreferrer"
            onClick={() => setModalShow(true)}
          >
            Read More
          </Button>

          <LectureModal show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar>
      );
    }
    function LectureModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="font2 cardbackgroundlight">
            <Modal.Header closeButton className="backgroundlight">
              <Modal.Title id="contained-modal-title-vcenter">
                Lecture Poll
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Overview</h4>
              <p>
                The idea of this website is to allow instructors to quickly and
                easily poll people for answers on test questions, quiz problems,
                or any other multiple-choice questions the user may want to ask
                their audience.
              </p>

              <h4>My Work</h4>
              <p>
                - Developed and designed the front end for the website <br></br>
                - Developed past question page that stores the old quizzes and
                sort them in orde
                <p>Team size: 3 </p>
              </p>
              <h4>How does it work:</h4>
              <p>
                - LecturePoll allows a user to create a poll with any question
                and any number of potential answers.<br></br>- Once the poll has
                been created, any user can access the link, either by QR code or
                by link code.<br></br>- A user who has the poll link can then
                submit their own answer to the poll.
                <br></br>- Any answers made by a user accessing the site are
                updated to the poll creator’s chart in real time.
                <br></br>- At any time, the poll creator can hide the chart or
                the room code, or close their poll to responses.
                <br></br>- From a logged-in user’s profile page, the user can
                also access any polls they have created recently.
              </p>
              <h4>Web Demo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tanny.pythonanywhere.com/finalversion2"
              >
                https://tanny.pythonanywhere.com/finalversion2
              </a>
              <h4>Github Repo:</h4>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/AlexSm9/Spr2018_WebApp_Group_Project"
              >
                https://github.com/AlexSm9/Spr2018_WebApp_Group_Project
              </a>
              <br />
              <br />
              <Divider variant="middle" />
              <br />
              <h4>What we used:</h4>
              <Row>
                <Col>
                  <h6>Language:</h6>
                  <Chip label="HTML" />
                  &nbsp;&nbsp;
                  <Chip label="CSS" />
                  &nbsp;&nbsp;
                  <Chip label="JavaScript" />
                </Col>
                <Col xs={6}>
                  <h6>Framework:</h6>
                  <Chip label="Web2py" />
                  &nbsp;&nbsp;
                  <Chip label="Anaconda" />
                  &nbsp;&nbsp;
                  <Chip label="jQuery" />
                  &nbsp;&nbsp;
                  <Chip label="Vue.js" />
                  &nbsp;&nbsp;
                  <Chip label="D3.js" />
                  &nbsp;&nbsp;
                  <Chip label="QRCode.js" />
                  &nbsp;&nbsp;
                  <Chip label="Pythonanywhere" />
                </Col>
                <Col>
                  <h6>Communication:</h6>
                  <Chip label="Github" />
                  &nbsp;&nbsp;
                  <Chip label="Google Drive" />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      );
    }
    return (
      <div className="backgroundlight">
        <div style={{ color: "black", paddingTop: "7%" }}>
          <div className="container font1 font2">
            <br></br>
            <div className="row no-gutters">
              {/* prep to your door */}
              <div className="col-lg-6">
                <div
                  className="portfolio-item"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="caption">
                    <span className="caption-content">
                      <h2 className="font">Prep To Your Door</h2>
                      <p className="mb-0">
                        Prep to Your Door is an online platform that focuses on
                        creating a healthier food environment in their home
                        state of Texas.
                      </p>
                      <PrepReadMore />
                    </span>
                  </span>
                  <img className="img-fluid" src={portfolio5} alt="" />
                </div>
              </div>
              {/* airbnb */}
              <div className="col-lg-6">
                <div
                  className="portfolio-item"
                  rel="noopener noreferrer"
                  target="_blank"
                  href=""
                >
                  <span className="caption">
                    <span className="caption-content">
                      <h2 className="font">Become A Top Airbnb Earner</h2>
                      <p className="mb-0">
                        This project used AI models to analyze Airbnb data and
                        study the factors for host to become a top earner.
                      </p>
                      <AirbnbReadMore />
                    </span>
                  </span>
                  <img className="img-fluid" src={portfolio1} alt="" />
                </div>
              </div>
              {/* gigs */}
              <div className="col-lg-6">
                <div
                  className="portfolio-item"
                  rel="noopener noreferrer"
                  target="_blank"
                  href=""
                >
                  <span className="caption">
                    <span className="caption-content">
                      <h2 className="font">Gigs</h2>
                      <p className="mb-0">
                        The website is an online platform that connects gigs
                        employers and employees.
                      </p>
                      <GigsReadMore />
                    </span>
                  </span>
                  <img className="img-fluid" src={portfolio2} alt="" />
                </div>
              </div>
              {/* treeki */}
              <div className="col-lg-6">
                <div
                  className="portfolio-item"
                  rel="noopener noreferrer"
                  target="_blank"
                  href=""
                >
                  <span className="caption">
                    <span className="caption-content">
                      <h2 className="font">Treeki</h2>
                      <p className="mb-0">
                        The app asks the user a daily question, and repeats
                        questions yearly which allows the user to see how
                        they've grown over the years.
                      </p>
                      <TreekiReadMore />
                    </span>
                  </span>
                  <img className="img-fluid" src={portfolio3} alt="" />
                </div>
              </div>
              {/* Lecture Poll */}
              <div className="col-lg-6">
                <div
                  className="portfolio-item"
                  rel="noopener noreferrer"
                  target="_blank"
                  href=""
                >
                  <span className="caption">
                    <span className="caption-content">
                      <h2 className="font">Lecture Poll</h2>
                      <p className="mb-0">
                        A web application for quick-and-easy poll questions.
                      </p>
                      <LectureReadMore />
                    </span>
                  </span>
                  <img className="img-fluid" src={portfolio4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

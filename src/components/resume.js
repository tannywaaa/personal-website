import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Experience from "./experience";
import ExperienceM from "./experienceM";
import Skills from "./skills";
import Profile2 from "../img/profile2.png";

class Resume extends Component {
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
  originalResume() {
    return (
      <div class="font1 font2 backgroundlight">
        <Grid style={{ paddingTop: "7%" }}>
          <Cell col={1}></Cell>
          <Cell col={3}>
            {this.top()}
            {this.educationWeb()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "66%",
                float: "right"
              }}
            />
            {this.contact()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "72%",
                float: "right"
              }}
            />
            {this.skills()}
            <br />
            <hr
              style={{
                borderTop: "3px solid black",
                width: "50%",
                float: "right"
              }}
            />
            {this.course()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "58%",
                float: "right"
              }}
            />
            {this.language()}
          </Cell>
          {/* right col */}
          <Cell
            className="resume-right-col"
            col={7}
            style={{
              boxShadow: "0px 5px 10px 4px rgba(0,0,0,0.2)"
            }}
          >
            {this.professionalExperienceWeb()}
            <hr style={{ borderTop: "3px solid white" }} />
            <br></br>
            {this.projectWeb()}
          </Cell>
          <Cell col={1} />
        </Grid>
      </div>
    );
  }

  mobileResume() {
    return (
      <div class="font1 font2 backgroundlight">
        <Grid>
          <Cell col={4}>
            {this.top()}
            {this.educationMobile()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "74%",
                float: "right"
              }}
            />
            {this.contact()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "80%",
                float: "right"
              }}
            />
            {this.skills()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "58%",
                float: "right"
              }}
            />
            {this.course()}
            <br></br>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "66%",
                float: "right"
              }}
            />
            {this.language()}
          </Cell>
          {/* right col */}
          <Cell className="resume-right-col" col={8}>
            {this.professionalExperienceMobile()}
            <hr style={{ borderTop: "3px solid white" }} />
            <br></br>
            {this.projectMobile()}
          </Cell>
        </Grid>
      </div>
    );
  }
  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      return <div>{this.originalResume()}</div>;
    } else {
      return <div>{this.mobileResume()}</div>;
    }
  }
  educationWeb = () => {
    return (
      <div>
        <hr
          style={{
            borderTop: "3px solid black",
            width: "60%",
            float: "right"
          }}
        />
        <h3>Education</h3>
        <br />
        <div className="social-links-resume">
          <i class="fas fa-school"></i>
        </div>
        <p>University of California, Santa Cruz</p>
        <div className="social-links-resume">
          <i class="fas fa-user-graduate"></i>
        </div>
        <p>Computer Science, B.S.</p>
      </div>
    );
  };
  educationMobile = () => {
    return (
      <div>
        <hr
          style={{
            borderTop: "3px solid black",
            width: "68%",
            float: "right"
          }}
        />
        <h3>Education</h3>
        <br />
        <div className="social-links-resume">
          <i class="fas fa-school"></i>
        </div>
        <p>University of California, Santa Cruz</p>
        <div className="social-links-resume">
          <i class="fas fa-user-graduate"></i>
        </div>
        <p>Computer Science, B.S.</p>
      </div>
    );
  };
  top = () => {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <img src={Profile2} alt="avatar" style={{ height: "200px" }} />
        </div>
        <h1
          style={{
            paddingTop: "1em",
            textAlign: "center"
          }}
        >
          Tanny Wang
        </h1>
        <h4 style={{ textAlign: "center" }}>
          Recent Graduate,<br></br>Software Engineer
        </h4>
        <p style={{ textAlign: "center" }}>
          <a
            href="https://www.dropbox.com/s/g2anflqr672hsw2/Tanny_Wang.pdf?dl=0"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Resume{" "}
          </a>
        </p>
      </div>
    );
  };
  skills = () => {
    return (
      <div>
        <h3>Skills</h3>
        <Skills skill="Proficient" progress={5} />
        <p style={{ paddingLeft: "5%" }}> Python (2 years), Java (2 years)</p>

        <Skills skill="Web Dev" progress={4} />
        <p style={{ paddingLeft: "5%" }}>JavaScript, HTML, CSS, ReactJS</p>
        <p style={{ paddingLeft: "5%" }}>
          Ruby on Rails, Bootstrap, Material-UI
        </p>

        <Skills skill="Database" progress={3} />
        <p style={{ paddingLeft: "5%" }}>MySQL, MySQL Workbench</p>
        <p style={{ paddingLeft: "5%" }}>PostgreSQL, Firebase</p>

        <Skills skill="Other" progress={3} />
        <p style={{ paddingLeft: "5%" }}>C, C++, Unix, Latex, Git</p>
        <p style={{ paddingLeft: "5%" }}>Android Studio, Shell Scripting</p>
        <p style={{ paddingLeft: "5%" }}>Jupyter Notebook, Django</p>
      </div>
    );
  };

  contact = () => {
    return (
      <div>
        <h3>Contact</h3>
        <br />
        <div className="social-links-resume">
          <i class="fas fa-envelope-square"></i>
        </div>
        <p>wangtangni96@gmail.com</p>
        <div className="social-links-resume">
          <i class="fas fa-phone-square"></i>
        </div>
        <p>(831) 419-3981</p>
        <div className="social-links-resume">
          <a
            href="https://www.linkedin.com/in/tangni-wang/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <p>www.linkedin.com/in/tangni-wang/</p>
        <div className="social-links-resume">
          <a
            href="https://www.github.com//tannywaaa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-github-square"></i>
          </a>
        </div>
        <p>github.com/tannywaaa</p>
        <div className="social-links-resume">
          <a
            href="https://tanny.netlify.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fas fa-window-maximize"></i>
          </a>
        </div>
        <p>tanny.netlify.com</p>
      </div>
    );
  };

  course = () => {
    return (
      <div>
        <h3>Course Work</h3>
        <br />
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Software Engineering</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Database Systems</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p> Mobile Applications</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Abstract Data Type</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Artificial Intelligence</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Operating Systems</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Computer Networking</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Web Applications</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Data Structures</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Analysis of Algorithms</p>
        <div className="social-links-resume">
          <i class="fas fa-book"></i>
        </div>
        <p>Intro to Networking and the Internet</p>
      </div>
    );
  };
  language = () => {
    return (
      <div>
        <h3>languages</h3>
        <br />
        <div className="social-links-resume">
          <i class="fas fa-flag"></i>
        </div>
        <p>English</p>
        <div className="social-links-resume">
          <i class="fas fa-flag"></i>
        </div>
        <p>Mandarin</p>
      </div>
    );
  };
  professionalExperienceWeb = () => {
    return (
      <div>
        <h2>Professional Experiences</h2>
        <br></br>
        <Experience
          startMonth="Dec. 2019"
          endMonth="Present"
          jobName="Software Engineer Intern, Infinite Options LLC."
          jobDescription1="– Lead frontend developer for web eCommerce platform. As- sessed UX and UI designs for technical feasibility"
          jobDescription2="– Implemented platform and client site user interface using Javascript, ReactJs, CSS, HTML5, Bootstrap, Material-UI and FontAwesome. Developed a NodeJS web application using ReactJS, helped to connect client and server with REST APIs using Flask."
          location="San Jose, CA"
        />
        <Experience
          startMonth="Jun"
          endMonth="Aug"
          year={2018}
          jobName="
          Web Developer Intern, Bioinformatics Solutions Inc."
          jobDescription1="- Replaced company’s website design from Wix by using HTML,
              CSS and JavaScript and tested for possible issues"
          location="Waterloo, ON"
        />
        <Experience
          startMonth="Jun"
          endMonth="Aug"
          year={2016}
          jobName="Data Analysis Intern, RSVP Technologies Inc."
          jobDescription1="- Used web script with Python libraries to parse data into individual text files"
          jobDescription2="- Localized movie subtitles datasets to a sentence aligned xml format, which is then recognized and separated by time into smaller conversations"
          location="Waterloo, ON"
        />
        <Experience
          startMonth="Mar. 2018"
          endMonth="Dec"
          year={2019}
          jobName="Tutor and Grader, UCSC"
          jobDescription1="- Write unit tests in C and shell scripts to determine the correctness of student programs. Adopt script to automatically send students email on grade information and merge csv files of students’ scores online.              "
          jobDescription2="- Courses: Data Structures, Abstract Data Type, Computational
              Models, Introduction to Programming(Accelerated)"
          location="Santa Cruz, CA"
        />
        <Experience
          startMonth="Jan"
          endMonth="April"
          year={2018}
          jobName="Research Assistant, UCSC"
          jobDescription1="- Created Python programs to manage and organize input vocab- ulary and feed to a natural language processor"
          jobDescription2="– Presented statistical data via Python libraries panda and beauti- ful soup to lead researcher"
          location="Santa Cruz, CA"
        />
      </div>
    );
  };
  professionalExperienceMobile = () => {
    return (
      <div>
        <h2>Professional Experiences</h2>
        <br></br>
        <ExperienceM
          startMonth="Dec. 2019"
          endMonth="Present"
          jobName="Software Engineer Intern, Infinite Options LLC."
          jobDescription1="– Lead frontend developer for web eCommerce platform. As- sessed UX and UI designs for technical feasibility"
          jobDescription2="– Implemented platform and client site user interface using Javascript, ReactJs, CSS, HTML5, Bootstrap, Material-UI and FontAwesome. Developed a NodeJS web application using ReactJS, helped to connect client and server with REST APIs using Flask."
          location="San Jose, CA"
        />
        <ExperienceM
          startMonth="Jun"
          endMonth="Aug"
          year={2018}
          jobName="
          Web Developer Intern, Bioinformatics Solutions Inc."
          jobDescription1="- Replaced company’s website design from Wix by using HTML,
              CSS and JavaScript and tested for possible issues"
          location="Waterloo, ON"
        />
        <ExperienceM
          startMonth="Jun"
          endMonth="Aug"
          year={2016}
          jobName="Data Analysis Intern, RSVP Technologies Inc."
          jobDescription1="- Used web script with Python libraries to parse data into individual text files"
          jobDescription2="- Localized movie subtitles datasets to a sentence aligned xml format, which is then recognized and separated by time into smaller conversations"
          location="Waterloo, ON"
        />
        <ExperienceM
          startMonth="Mar. 2018"
          endMonth="Dec"
          year={2019}
          jobName="Tutor and Grader, UCSC"
          jobDescription1="- Write unit tests in C and shell scripts to determine the correctness of student programs. Adopt script to automatically send students email on grade information and merge csv files of students’ scores online.              "
          jobDescription2="- Courses: Data Structures, Abstract Data Type, Computational
              Models, Introduction to Programming(Accelerated)"
          location="Santa Cruz, CA"
        />
        <ExperienceM
          startMonth="Jan"
          endMonth="April"
          year={2018}
          jobName="Research Assistant, UCSC"
          jobDescription1="- Created Python programs to manage and organize input vocab- ulary and feed to a natural language processor"
          jobDescription2="– Presented statistical data via Python libraries panda and beauti- ful soup to lead researcher"
          location="Santa Cruz, CA"
        />
      </div>
    );
  };
  projectWeb = () => {
    return (
      <div>
        <h2>Projects</h2>
        <br></br>
        <Experience
          startMonth="Dec. 2019"
          endMonth="Present"
          jobName="Prep To Your Door, Web Application"
          jobDescription1="– Implemented platform and client site user interface using Javascript, ReactJs, CSS, HTML5, Bootstrap, Material-UI and FontAwesome"
          jobDescription2="– Developed a NodeJS web application using ReactJS, helped to connect client and server with REST APIs using Flask."
          link="https://preptoyourdoor.netlify.com/, https://preptoyourdoor-admin.netlify.com/"
          location="ReactJS"
        />
        <Experience
          startMonth="Oct"
          endMonth="Dec"
          year={2018}
          jobName="Gigs, Web Application"
          jobDescription1="- Designed and developed the front-end for the website includes home page, post related pages, job request pages and profile related pages "
          jobDescription2="- Collected and organized the database for users and posts for the entire website"
          link="https://gigsapp-115.herokuapp.com"
          location="Ruby on Rails"
        />
        <Experience
          startMonth="May"
          endMonth="June"
          year={2018}
          jobName="Lecture Poll, Web Application"
          jobDescription1="Designed and created the front-end of the website mainly using HTML, CSS and Javascript. The website includes 4 HTML views for both students and teachers sites"
          link="https://tanny.pythonanywhere.com/finalversion2"
          location="Web2py"
        />
        <Experience
          startMonth="Jan"
          endMonth="Mar"
          year={2019}
          jobName="Become A Top Airbnb Earner,AI"
          jobDescription1="- Analyzed the provided Seattle Airbnb data, separated data into training and testing sets and calculated top and low performers thresholds"
          jobDescription2="-  Applied a stretch method Bayesian Ridge Regression and gen- erated dot graph"
          location="Python"
        />
        <Experience
          startMonth="Apr"
          endMonth="Jun"
          year={2018}
          jobName="Treeki, Android Application"
          jobDescription1="- Developed login, register by storing user information into database using Firebase"
          jobDescription2="- Collaborated on friends lists features such as searching friends from all users, adding friends with email and viewing friends’ posts"
          link="Video Demo: https://www.youtube.com/watch?v=-m2fkFefGNk"
          location="Android Studio"
        />
      </div>
    );
  };
  projectMobile = () => {
    return (
      <div>
        <h2>Projects</h2>
        <br></br>
        <ExperienceM
          startMonth="Oct"
          endMonth="Dec"
          year={2018}
          jobName="Gigs, Web Application "
          jobDescription1="- Designed and developed the front-end for the website includes home page, post related pages, job request pages and profile related pages "
          jobDescription2="- Collected and organized the database for users and posts for the entire website"
          link="https://gigsapp-115.herokuapp.com"
          location="Ruby on Rails"
        />
        <ExperienceM
          startMonth="May"
          endMonth="June"
          year={2018}
          jobName="Lecture Poll, Web Application"
          jobDescription1="Designed and created the front-end of the website mainly using HTML, CSS and Javascript. The website includes 4 HTML views for both students and teachers sites"
          link="https://tanny.pythonanywhere.com/finalversion2"
          location="Web2py"
        />
        <ExperienceM
          startMonth="Jan"
          endMonth="Mar"
          year={2019}
          jobName="Become A Top Airbnb Earner,AI"
          jobDescription1="- Analyzed the provided Seattle Airbnb data, separated data into training and testing sets and calculated top and low performers thresholds"
          jobDescription2="-  Applied a stretch method Bayesian Ridge Regression and gen- erated dot graph"
          location="Python"
        />
        <ExperienceM
          startMonth="Apr"
          endMonth="Jun"
          year={2018}
          jobName="Treeki, Android Application"
          jobDescription1="- Developed login, register by storing user information into database using Firebase"
          jobDescription2="- Collaborated on friends lists features such as searching friends from all users, adding friends with email and viewing friends’ posts"
          link="Video Demo: https://www.youtube.com/watch?v=-m2fkFefGNk"
          location="Android Studio"
        />
      </div>
    );
  };
}

export default Resume;

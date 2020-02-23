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
      <div class="font1 font2">
        <Grid
          style={{ background: "#DAD4DB", color: "black", paddingTop: "7%" }}
        >
          <Cell col={3}>
            <div style={{ textAlign: "center" }}>
              <img src={Profile2} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h1
              style={{
                paddingTop: "1em",
                textAlign: "center",
                color: "#493f3f"
              }}
            >
              Tanny Wang
            </h1>
            <h4 style={{ textAlign: "center" }}>
              Recent Graduate,<br></br>Software Engineer
            </h4>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://www.dropbox.com/s/pm6dpxk8dw3vejw/Tangni-Wang-l2.pdf?dl=0"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download Resume{" "}
              </a>
            </p>
            {/* objective */}
            {/* <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "74%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Objective</h3>
            <p>
              I need a position as soon as possible due to my current OPT status
              and will take substantially lower pay compare to competing
              applicants.
            </p>
            <br></br> */}
            {/* education */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "60%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Education</h3>
            <div className="social-links-resume">
              <i class="fas fa-school"></i>
            </div>
            <p>University of California, Santa Cruz</p>
            <div className="social-links-resume">
              <i class="fas fa-user-graduate"></i>
            </div>
            <p>Computer Science, B.S.</p>
            <br></br>
            {/* contact */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "66%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Contact</h3>
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
            <br></br>
            {/* skills */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "72%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Skills</h3>
            <Skills skill="Proficient" progress={100} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>
              {" "}
              Python (2 years), Java (2 years)
            </p>
            <Skills skill="Web Dev" progress={90} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>JavaScript, HTML, CSS, ReactJS</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>
              Ruby on Rails, Bootstrap, Web2Py
            </p>
            <Skills skill="Database" progress={70} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>MySQL, MySQL Workbench</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>PostgreSQL, Firebase</p>
            <Skills skill="Other" progress={70} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>C, C++, Unix, Latex, Git</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>Android Studio, Shell Scripting</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>Jupyter Notebook, Django</p>
            <br></br>

            {/* course work */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "50%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Course Work</h3>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Software Engineering, Database Systems</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p> Mobile Applications, Abstract Data Type</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Artificial Intelligence, Operating Systems</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Computer Networking, Web Applications</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Analysis of Algorithms, Data Structures</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Intro to Networking and the Internet</p>
            <br></br>
            {/* languages */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "58%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>languages</h3>
            <div className="social-links-resume">
              <i class="fas fa-flag"></i>
            </div>
            <p>English</p>
            <div className="social-links-resume">
              <i class="fas fa-flag"></i>
            </div>
            <p>Mandarin</p>
          </Cell>
          {/* right col */}
          <Cell className="resume-right-col" col={9}>
            <h2 style={{ color: "#DAD4DB" }}>Professional Experiences</h2>
            <br></br>
            <Experience
              startMonth="Dec. 2019"
              endMonth="Present"
              jobName="Internship, Infinite Options LLC."
              jobDescription1="- Implemented the frontend and database of website www.preptoyourdoor.com using HTML, CSS, JavaScript, React and MySQL and tested for possible issues"
              location="San Jose, CA"
            />
            <Experience
              startMonth="Jun"
              endMonth="Aug"
              year={2018}
              jobName="Internship, Bioinformatics Solutions Inc."
              jobDescription1="- Replaced company’s website design from Wix by using HTML,
              CSS and JavaScript and tested for possible issues"
              location="Waterloo, ON"
            />
            <Experience
              startMonth="Jun"
              endMonth="Aug"
              year={2016}
              jobName="Internship, RSVP Technologies Inc."
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
              jobDescription1="- Created Python scripts to extract and clean raw data collected in text files by searching for keywords, removing duplicates and rewriting data"
              jobDescription2="-  Analyzed frequency of words appearing in provided data of blogs, texts and comments by applying unigram, bigram and trigram"
              location="Santa Cruz, CA"
            />

            <hr style={{ borderTop: "3px solid #DAD4DB" }} />
            <br></br>
            <h2 style={{ color: "#DAD4DB" }}>Projects</h2>
            <br></br>

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
          </Cell>
        </Grid>
      </div>
    );
  }

  mobileResume() {
    return (
      <div class="font1 font2">
        <Grid style={{ background: "#DAD4DB", color: "black" }}>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={Profile2} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h1
              style={{
                paddingTop: "1em",
                textAlign: "center",
                color: "#493f3f"
              }}
            >
              Tangni Wang
            </h1>
            <h4 style={{ textAlign: "center" }}>
              Recent Graduate,<br></br>Software Engineer
            </h4>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://www.dropbox.com/s/l8w5nv30lc2ndd2/spring_resume.pdf?dl=0"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download Resume{" "}
              </a>
            </p>
            {/* objective */}
            {/* <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "74%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Objective</h3>
            <p>
              I need a position as soon as possible due to my current OPT status
              and will take substantially lower pay compare to competing
              applicants.
            </p>
            <br></br> */}
            {/* education */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "68%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Education</h3>
            <div className="social-links-resume">
              <i class="fas fa-school"></i>
            </div>
            <p>University of California, Santa Cruz</p>
            <div className="social-links-resume">
              <i class="fas fa-user-graduate"></i>
            </div>
            <p>Computer Science, B.S.</p>
            <br></br>
            {/* contact */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "74%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Contact</h3>
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
            <br></br>
            {/* skills */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "80%",
                float: "right"
              }}
            />

            <h3 style={{ color: "#493f3f" }}>Skills</h3>
            <Skills skill="Proficient" progress={100} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>
              {" "}
              Python (2 years), Java (2 years)
            </p>
            <Skills skill="Web Dev" progress={90} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>JavaScript, HTML, CSS, ReactJS</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>
              Ruby on Rails, Bootstrap, Web2Py
            </p>
            <Skills skill="Database" progress={70} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>MySQL, MySQL Workbench</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>PostgreSQL, Firebase</p>
            <Skills skill="Other" progress={70} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>C, C++, Unix, Latex, Git</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>Android Studio, Shell Scripting</p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>Jupyter Notebook, Django</p>
            <br></br>
            {/* course work */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "58%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Course Work</h3>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Software Engineering, Database Systems</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p> Mobile Applications, Abstract Data Type</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Artificial Intelligence, Operating Systems</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Computer Networking, Web Applications</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Analysis of Algorithms, Data Structures</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Intro to Networking and the Internet</p>
            <br></br>
            {/* languages */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "66%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>languages</h3>
            <div className="social-links-resume">
              <i class="fas fa-flag"></i>
            </div>
            <p>English</p>
            <div className="social-links-resume">
              <i class="fas fa-flag"></i>
            </div>
            <p>Mandarin</p>
          </Cell>
          {/* right col */}
          <Cell className="resume-right-col" col={8}>
            <h2 style={{ color: "#DAD4DB" }}>Professional Experiences</h2>
            <br></br>
            <ExperienceM
              startMonth="Dec. 2019"
              endMonth="Present"
              jobName="Internship, Infinite Options LLC."
              jobDescription1="- Implemented the frontend and database of website www.preptoyourdoor.com using HTML, CSS, JavaScript, React and MySQL and tested for possible issues"
              location="San Jose, CA"
            />
            <ExperienceM
              startMonth="Jun"
              endMonth="Aug"
              year={2018}
              jobName="Internship, Bioinformatics Solutions Inc."
              jobDescription1="- Replaced company’s website design from Wix by using HTML,
              CSS and JavaScript and tested for possible issues"
              location="Waterloo, ON"
            />
            <ExperienceM
              startMonth="Jun"
              endMonth="Aug"
              year={2016}
              jobName="Internship, RSVP Technologies Inc."
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
              jobDescription2="- Courses: Data Structures, Abstract Data Type, Computational Models, Introduction to Programming(Accelerated)"
              location="Santa Cruz, CA"
            />
            <ExperienceM
              startMonth="Jan"
              endMonth="April"
              year={2018}
              jobName="Research Assistant, UCSC"
              jobDescription1="- Created Python scripts to extract and clean raw data collected in text files by searching for keywords, removing duplicates and rewriting data"
              jobDescription2="-  Analyzed frequency of words appearing in provided data of blogs, texts and comments by applying unigram, bigram and trigram"
              location="Santa Cruz, CA"
            />
            <hr style={{ borderTop: "3px solid #DAD4DB" }} />
            <br></br>
            <h2 style={{ color: "#DAD4DB" }}>Projects</h2>
            <br></br>
            <ExperienceM
              startMonth="Oct"
              endMonth="Dec"
              year={2018}
              jobName="Gigs, Web Application"
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
}

export default Resume;

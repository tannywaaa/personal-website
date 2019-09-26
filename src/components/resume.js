import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Experience from "./experience";
import Skills from "./skills";
import Profile2 from "../img/profile2.png";

class Resume extends Component {
  render() {
    return (
      <div>
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
                width: "74%",
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
            <p>Computer Science, B.S., June 2019</p>
            <br></br>
            {/* contact */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "78%",
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
            <p>(123) 456-7890</p>
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
                width: "82%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Skills</h3>
            <Skills skill="Most Experienced" progress={100} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}> Python, Java</p>
            <Skills skill="Less Experienced" progress={70} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>JavaScript, MySQL, C, HTML, CSS</p>
            <Skills skill="Platform Used" progress={80} />
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>
              React, Ruby, Unix, Latex, Git, Bootstrap
            </p>
            <div className="social-links-resume">
              <i class="fas fa-code"></i>
            </div>
            <p style={{ paddingLeft: "5%" }}>Android Studio, Web2py</p>
            <br></br>
            {/* course work */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "70%",
                float: "right"
              }}
            />
            <h3 style={{ color: "#493f3f" }}>Course Work</h3>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Software Engineering, Database Systems, Mobile Applications</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Web Applications, Artificial Intelligence, Operating Systems</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Computational Models, Analysis of Algorithms, Data Structures</p>
            <div className="social-links-resume">
              <i class="fas fa-book"></i>
            </div>
            <p>Data Structures, Computer Networking, Abstract Data Type</p>
            <br></br>
            {/* languages */}
            <hr
              style={{
                borderTop: "3px solid #493f3f",
                width: "72%",
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
            <Experience
              startMonth="Jun"
              endMonth="Aug"
              year={2018}
              jobName="Internship, Bioinformatics Solutions Inc."
              jobDescription1="- Edited and redesigned the website by cooperating with the development team"
              location="Waterloo, Canada"
            />
            <Experience
              startMonth="Jan"
              endMonth="April"
              year={2018}
              jobName="Research Assistant, UCSC"
              jobDescription1="- Write Python programs to extract and cleaned messy data collected in text files, searched for keywords, removed duplicates and rewrote the data"
              jobDescription2="- Analyze the frequency of words that appear in the given data of blogs, texts and comments by varying strategies"
              location="Santa Cruz, CA"
            />
            <Experience
              startMonth="Mar"
              endMonth="Dec"
              year={2018}
              jobName="Tutor and Grader, Learning Support Services, UCSC"
              jobDescription1="- Worked as Small Group Tutor to help students with homework. Helped professor to grade midterms and finals for course: Introduction to Programming(Accelerated)"
              jobDescription2="- Tutored Course: Computational Models, Introduction to Programming(Accelerated)"
              location="Santa Cruz, CA"
            />
            <Experience
              startMonth="Jun"
              endMonth="Aug"
              year={2016}
              jobName="Internship, RSVP Technologies Inc."
              jobDescription1="- Collected and analyzed data. Small programs written in Python to take the contents from information websites and sort them into text files with different categories"
              jobDescription2="- Localized the movie subtitles datasets to a sentence aligned xml format, which is then recognized and separates the subtitles by time into smaller conversations"
              location="Waterloo, Canada"
            />
            <hr style={{ borderTop: "3px solid #DAD4DB" }} />
            <h2 style={{ color: "#DAD4DB" }}>Projects</h2>
            <br></br>
            <Experience
              startMonth="Jan"
              endMonth="Mar"
              year={2019}
              jobName="Become A Top Airbnb Earner,AI"
              jobDescription1="- Analyzed the provided Seattle Airbnb data, separated data into training and testing sets and calculated top and low performers thresholds "
              jobDescription2="- Applied a stretch method Bayesian Ridge Regression and generated dot graph"
              location="Python"
            />
            <Experience
              startMonth="Oct"
              endMonth="Dec"
              year={2018}
              jobName="Gigs, Web Application"
              jobDescription1="- Designed and developed the front end for the website includes home page, post related pages, job request pages and proﬁle related pages "
              jobDescription2="- Developed the proﬁle pages with creating proﬁle, editing proﬁle and view other users' public proﬁle information. Created the user database and connected with proﬁle pages"
              link="https://gigsapp-115.herokuapp.com"
              location="Ruby on Rails"
            />
            <Experience
              startMonth="Apr"
              endMonth="Jun"
              year={2018}
              jobName="Treeki, Android Application"
              jobDescription1="- Developed login, register by storing user information into database by using Firebase"
              jobDescription2="- Developed friends lists features such as searching friends from all users, adding friends with email and viewing friends' posts"
              link="Video Demo: https://www.youtube.com/watch?v=-m2fkFefGNk"
              location="Android Studio"
            />
            <Experience
              startMonth="May"
              endMonth="June"
              year={2018}
              jobName="Lecture Poll, Web Application"
              jobDescription1="- Developed and designed the front end for the website"
              jobDescription2="- Developed past question page that stores the old quizzes and sort them in order"
              link="https://tanny.pythonanywhere.com/finalversion2"
              location="Web2py"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

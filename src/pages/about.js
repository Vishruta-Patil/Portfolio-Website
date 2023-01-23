import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useGeneral } from "../context/general.context";
import { skillsData } from "../data/about";
import { PROFILE_IMAGE } from "../utils/imageConstants";

export function About() {
  const { nav, setNav } = useGeneral();
  const [tab, setTab] = useState("experience");
  useEffect(() => {
    setNav(false);
  }, []);

  return (
    <div class="main">
      <Navbar nav={nav} setNav={setNav} />
      <section class={`about-section  sec-padding ${nav ? "fade-out" : ""}`}>
        <div class="container">
          <div class="row ">
            <div class="section-title">
              <h2>about me</h2>
            </div>
          </div>
          <div class="row">
            <div class="about-img">
              <div class="img-box">
                <img src={PROFILE_IMAGE} alt="Profile photo" />
              </div>
            </div>
            <div class="about-text">
              <p>
                {" "}
                I'm a final year Computer engineering undergrad from the
                University of Mumbai. I love to build web apps and to
                participate in various hackathons.
              </p>
              <p>
                I have won first prize in the HackNeoG'22 organized by neoG Camp
                and I am also the finalist of Smart India Hackathon'22 oragnized
                by the Government of India.
              </p>
              <p>
                I have worked in the Gaming industry, EdTech, FinTech companies
                as Software Engineer Intern. Currently looking to build my
                skills through full time SDE roles.
              </p>

              <h3>Skills</h3>
              <div class="skills">
                {skillsData.map((skill, ind) => (
                  <div key={ind} class="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="about-work-box">
            <div class="about-tabs">
              <button
                type="button"
                class={`tab-item ${tab === "experience" ? "active" : ""}`}
                data-target="#experience"
                onClick={() => setTab("experience")}
              >
                Experience
              </button>
              <button
                type="button"
                class={`tab-item ${tab === "education" ? "active" : ""}`}
                data-target="#education"
                onClick={() => setTab("education")}
              >
                Education
              </button>
            </div>

            {tab === "education" ? (
              <div
                class={`tab-content ${tab === "education" ? "active" : ""}`}
                id="education"
              >
                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">2019 - 2023</span>
                    <h4>
                      Bachelor of Engineering, <span>University of Mumbai</span>
                    </h4>
                    <p>Branch : Computer Engineering</p>
                  </div>
                  <div class="timeline-item">
                    <span class="date">2017 - 2019</span>
                    <h4>
                      HSC,{" "}
                      <span>
                        Nirmala Memorial Foundation College of Commerce &
                        Science
                      </span>
                    </h4>
                    <p>Branch : Science</p>
                  </div>
                  <div class="timeline-item">
                    <span class="date">2007 - 2017</span>
                    <h4>
                      SSC, <span>St Anne's High School</span>
                    </h4>
                  </div>
                </div>
              </div>
            ) : (
              <div
                class={`tab-content ${tab === "experience" ? "active" : ""}`}
                id="experience"
              >
                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">October,2022 - Present</span>
                    <h4>
                      Software Engineer Intern - <span>SALT (YC W’22)</span>
                    </h4>
                    <p>
                      • Developing and implementing scalable, optimized &
                      maintainable advanced banking applications using
                      TypeScript and Nextjs
                    </p>
                    <p>
                      • Building Paper Do - one-click solution for legal
                      documents using Reactjs, Nodejs, Redux.
                    </p>
                  </div>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">June,2022 - August, 2022</span>
                    <h4>
                      Software Developer Intern - <span>neoG Camp</span>
                    </h4>
                    <p>
                      • Responsible for reviewing 300+ projects in accordance
                      with code quality, fixing technical issues, testing
                      applications
                    </p>
                  </div>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">October,2021 - March,2022</span>
                    <h4>
                      Software Developer Intern -{" "}
                      <span>Khelgully Gaming Private Limited</span>
                    </h4>
                    <p>
                      • Developed and implemented an end-to-end admin panel and
                      careers Page of Khelgully official website using Reactjs,
                      React-Router, Redux, Material-UI. <br />• Admin panel
                      handles more than 150 tournaments per day. <br />
                      • Maintained the admin panel by adding new features used
                      for monitoring different metrics of the system for
                      improved visibility that increased engagement by 25% and
                      helped in scaling it to over 65000+ users <br />•
                      Integrated features in the panel for tracking the upcoming
                      & released games of different stages and types, managing
                      the data, mapping price structure & winners, and shipping
                      the transactions to sponsors, organizers & winning players
                    </p>
                  </div>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">June,2021 - August,2021</span>
                    <h4>
                      Fullstack Web Developer - <span>Techq konnect</span>
                    </h4>
                    <p>
                      • Responsible for developing frontend and backend of web
                      applications and integrating multiple machine learning
                      models and payment gateway integrations in the web app.{" "}
                      <br />
                      • Used React and Nodejs at a scale to build devtools and
                      products. <br />• Also worked on building a database using
                      MongoDB, MySQL.
                    </p>
                  </div>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">July,2021 - Present</span>
                    <h4>Microsoft Learn Student Ambassador</h4>
                    <p>
                      • Hosted a technical event on Microsoft technologies and
                      imparted knowledge to more than 100 students. <br />
                      • As Microsoft Learn Student Ambassador, I get to learn
                      new skills using Microsoft resources, collaborate connect
                      with professionals, solve real-world problems, create an
                      impact in tech communities.
                      <br />• Currently learning different Microsoft
                      technologies like Azure, Cognitive Services, Power
                      Platform
                    </p>
                  </div>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">May,2021</span>
                    <h4>
                      Web Developer - <span>The Sparks Foundation</span>
                    </h4>
                    <p>
                      Designed and implemented features in the donation website
                      to accept donation amounts, sending confirmation receipt
                      to the donor through email instantly, notifying the amount
                      of donation to the organization and updating people
                      regarding the services provided by the organization.
                      Technologies Used - HTML, SCSS, EJS, JavaScript, Nodejs,
                      Express.
                    </p>
                  </div>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <span class="date">March,2021-May,2021</span>
                    <h4>
                      Open Source Contributor -{" "}
                      <span>GirlScript Summer of Code</span>
                    </h4>
                    <p>
                      Contributed to the web-app project by adding and modifying
                      features of the newsletter, chatbot, login page, password
                      system using React for frontend and Nodejs, Express for
                      the backend. The database used was MongoDB. Also worked in
                      the C, C++, java based projects on implementing various
                      algorithms and data structure to solve complex problems.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div class="about-btn" style={{display:"flex", justifyContent:"center"}}>
          <a
            href="https://drive.google.com/file/d/1LXiWtgKUw_r_IoiEvsJATKcsu-kT7WL_/view?usp=share_link"
            target="_blank"
            class="btn"
          >
            Resume
          </a>
          <Link to="/contact" class="btn link-item">
            contact me
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

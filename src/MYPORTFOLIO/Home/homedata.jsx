import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './homedata.css';

const HomeData = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      
    });
  }, []);

  return (
    <>
      <div id="main-container" data-aos="fade-down">
        <div id="home" data-aos="fade-up" data-aos-delay="100">
          <div id="home-data" data-aos="fade-right">
            <h1 id="head-cont">
              Hi, I am <b id="sha">Shashavali</b>
            </h1>
            <h2>
              I am a{' '}
              <span className="typewriter-text">
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer...', 'Learner...'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 70,
                    deleteSpeed: 50,
                    pauseFor: 1000,
                  }}
                />
              </span>
            </h2>
            <h4>Creating End-to-End Web Applications with Modern Tech</h4>

            <a
              href="mailto:shashafa48da0427@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Shashavali,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="contact-btn">Hire Me</button>
            </a>

            <a href="MEER_SHASHAVALI.pdf" download="Shashavali Resume.pdf">
              <button id="resume">Download CV</button>
            </a>

            <div id="icons" data-aos="fade-up" data-aos-delay="200">
              <a
                href="https://wa.me/917013457506"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/shasha0427"
                target="_blank"
                rel="noopener noreferrer"
                id="github"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/meer-shashavali-211b312a2/"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/s_h_a__s_h_a_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                id="insta"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div id="home-img" data-aos="fade-left" data-aos-delay="300">
            <img id="sha-img" src="Shasha1.jpg" alt="Shashavali" />
          </div>
        </div>
      </div>

      <div id="home-abt" data-aos="fade-up" data-aos-delay="400">
        <div id="home-abt-img" data-aos="zoom-in">
          <img src="Shasha1.jpg" alt="About Me" />
        </div>

        <div id="home-abt-data" data-aos="fade-left" data-aos-delay="500">
          <h1 id="hme-abt-h1">About Me</h1>
          <p id="hme-abt-p">
            I am a Full Stack Developer with a passion for creating dynamic and
            responsive web applications. My expertise lies in both front-end and
            back-end development, allowing me to build complete solutions that
            deliver exceptional user experiences.
          </p>
          <p id="hme-abt-p">
            I am always eager to learn new technologies and improve my skills.
            Let's connect and explore how we can work together to create
            something amazing!
          </p>
          <h2 id="skill-hm-dt">Core Skills</h2>
          <div className="skills-container" data-aos="fade-up" data-aos-delay="600">
            <span id="html">HTML</span>
            <span id="css">CSS</span>
            <span id="js">JavaScript</span>
            <span id="react">React</span>
            <span id="node">Node.js</span>
            <span id="mongodb">MongoDB</span>
            <span id="sql">MYSQL</span>
            <span id="git">GitHub</span>
            <span id="py">Python</span>
          </div>

          <div className="abt-btn-wrapper" data-aos="fade-up" data-aos-delay="700">
            <span
              id="abt-btn"
              onClick={() => navigate('./about')}
              style={{ cursor: 'pointer' }}
            >
              View More About Me <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>

      <div id="hmdt-pr-main" data-aos="fade-up" data-aos-delay="600">
        <div id="hm-dt-pr">
          <div id="hm-dt-pr-head" data-aos="fade-up">
            <h1 id="hm-dt-pr-h1">Projects</h1>
            <p id="hm-dt-pr-p">
              Here are some of my recent projects that showcase my skills and
              creativity. Each project is a testament to my ability to solve
              real-world problems through innovative web solutions.
            </p>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <img
              src="MyNivas.png"
              alt="MyNivas Project"
              className="project-img"
            />
            <h2>MyNivas</h2>
            <p>
              A real estate platform to simplify property management and rental
              processes. Built with MERN stack.
            </p>
            <div className="button-wrapper">
              <a
                href="https://github.com/shasha0427/MyNivas.git"
                className="project-link github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://project-space-thub.vercel.app"
                className="project-link preview-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <img
              src="KHELOINDIA.png"
              alt="Sports Website Project"
              className="project-img"
            />
            <h2>Sports Website</h2>
            <p>
              A dynamic sports portal for match updates, news, and team stats.
              Includes live score integration and user profiles.
            </p>
            <div className="button-wrapper">
              <a
                href="https://github.com/shasha0427/project-thub"
                className="project-link github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://project-space.vercel.app"
                className="project-link preview-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <img
              src="AURA.png"
              alt="E-commerce Project"
              className="project-img"
            />
            <h2>E-commerce Platform</h2>
            <p>
              Fully-featured shopping platform with user authentication,
              product management, and cart functionality.
            </p>
            <div className="button-wrapper">
              <a
                href="https://github.com/shasha0427/project-thub"
                className="project-link github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://project-thub.vercel.app"
                className="project-link preview-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          id="hm-dt-pr-btn"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <button
            id="hm-dt-pr-btn"
            onClick={() => navigate('./projects')}
          >
            View All Projects <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div id="hm-dt-ct" data-aos="fade-up" data-aos-delay="600">
        <h1 id="hm-dt-ct-h1">Let's Work Together</h1>
        <p id="hm-dt-ct-p">
          I am always open to new opportunities and collaborations. If you
          have a project in mind or just want to connect, feel free to reach
          out!
        </p>
        <div id="hm-dt-ct-btn">
          <button
            id="hm-dt-ct-btn"
            onClick={() => navigate('./contact')}
          >
            Get In Touch <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <hr
        style={{
          border: 'none',
          height: '2px',
          background: 'linear-gradient(to right, #2c2c2cff, #272728ff)',
          margin: '20px 0',
          borderRadius: '4px',
        }}
       
      />

      <div id="footer" >
        <p>© 2024 Shashavali. All rights reserved.</p>
        <div id="icons-ft">
          <a
            href="https://wa.me/917013457506"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/shasha0427"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/meer-shashavali-211b312a2/"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/s_h_a__s_h_a_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            id="insta"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeData;

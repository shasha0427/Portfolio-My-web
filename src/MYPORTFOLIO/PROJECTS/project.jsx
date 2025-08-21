import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pr.css";


const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // allows animation on every scroll
    });
  }, []);

  return (
    <>
      <div id="projects-section" data-aos="fade-up">
        <div className="projects-header" data-aos="fade-down">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            A showcase of impactful projects in web development, mobile apps, and
            hardware, blending creativity, innovation, and technology seamlessly.
          </p>
        </div>

        <div className="projects-container">
          {/* Project 1 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="200">
            <img src="MyNivas.png" alt="MyNivas" className="project-img" />
            <h2>MyNivas</h2>
            <p>
              A real estate platform to simplify property management and rental
              processes. Built with MERN stack.
            </p>
            <div className="button-wrapper">
              <a
                href="https://github.com/shasha0427/MyNivas.git"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-btn"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://project-space-thub.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link preview-btn"
              >
                Preview <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="400">
            <img src="KHELOINDIA.png" alt="Sports Website" className="project-img" />
            <h2>Sports Website</h2>
            <p>
              A dynamic sports portal for match updates, news, and team stats.
              Includes live score integration and user profiles.
            </p>
            <div className="button-wrapper">
              <a
                href="https://github.com/shasha0427/project-thub"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-btn"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://project-space.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link preview-btn"
              >
                Preview <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card" data-aos="zoom-in" data-aos-delay="600">
            <img src="AURA.png" alt="E-commerce" className="project-img" />
            <h2>E-commerce Platform</h2>
            <p>
              Fully-featured shopping platform with user authentication, product
              management, and cart functionality.
            </p>
            <div className="button-wrapper">
              <a
                href="https://github.com/shasha0427/project-thub"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-btn"
              >
                GitHub <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://project-thub.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link preview-btn"
              >
                Preview <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <hr className="divider" />
 
      <div id="footer">
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

export default Projects;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // ❌ false → allows animations every time on scroll
    });
  }, []);

  return (
    <>
      <h1 id="abt-sec" data-aos="fade-down">About Me</h1>
      <p id="abt-sub" data-aos="fade-up" data-aos-delay="100">
        I craft intelligent, high-performance web applications that merge creativity,
        innovation, and technology to shape the digital future.
      </p>

      <div id="about" data-aos="fade-up" data-aos-delay="200">
        <div id="abt-img" data-aos="fade-right">
          <img src="Shasha1.jpg" alt="Shasha" id="img-abt" />
        </div>
        <div id="abt-cont" data-aos="fade-left" data-aos-delay="300">
          <p id="abt-cont-1">
            I’m a dedicated Full-Stack Developer driven by a passion for creating modern,
            scalable, and user-focused web applications that deliver real impact. With a
            strong command of the MERN stack—MongoDB, Express.js, React.js, and Node.js—I
            seamlessly bridge the gap between intuitive, responsive front-end design and
            powerful, secure back-end systems.
          </p>
          <p id="abt-cont-1">
            My journey into development began with mastering core web technologies like
            HTML, CSS, and JavaScript, laying a strong foundation for building interactive
            and accessible user interfaces. Over time, I expanded my expertise by exploring
            advanced frameworks, libraries, and development practices. This evolution was
            accelerated through real-world projects and a professional internship, where I
            gained valuable experience in full-stack JavaScript development, REST API
            creation, database management, and agile collaboration in team environments.
          </p>
          <p id="abt-cont-1">
            Beyond my expertise in the MERN stack, I continuously explore emerging
            technologies and modern frameworks, allowing me to adapt quickly to evolving
            project requirements. Whether it’s integrating new tools, optimizing performance,
            or enhancing user experience, I’m always eager to innovate and push boundaries.
          </p>
          <p id="abt-cont-1">
            Ultimately, my mission is to design and develop solutions that are not only
            functional and efficient but also intuitive, performance-driven, and
            impactful—applications that people genuinely enjoy using and that solve
            real-world problems.
          </p>
        </div>
      </div>

      <h1 id="abt-skill" data-aos="fade-up">Technical Skills</h1>
      <div id="skill-sec" data-aos="zoom-in" data-aos-delay="200">
        <span id="html">HTML</span>
        <span id="css">CSS</span>
        <span id="js">JavaScript</span>
        <span id="react">React</span>
        <span id="node">Node.js</span>
        <span id="mongodb">MongoDB</span>
        <span id="sql">MYSQL</span>
        <span id="git">GitHub</span>
        <span id="py">Python</span>
        <span id="java">JAVA</span>
      </div>

      <h1 id="edu-title-main" data-aos="fade-up">Education</h1>
      <div id="edu-timeline">
        <div className="edu-item" data-aos="fade-up" data-aos-delay="100">
          <div className="edu-year">2024 – 2026</div>
          <div className="edu-marker"></div>
          <div className="edu-card">
            <img src="AdityaLogo.png" alt="MCA" className="edu-logo" />
            <div className="edu-details">
              <h3>Master of Computer Applications</h3>
              <p className="edu-inst">Aditya University</p>
              <p className="edu-meta">📍 Surampalem, Andhra Pradesh, India </p>
              <p className="edu-meta">📄 GPA: 8.20/10.0 </p>
            </div>
          </div>
        </div>

        <div className="edu-item" data-aos="fade-up" data-aos-delay="200">
          <div className="edu-year">2020 – 2023</div>
          <div className="edu-marker"></div>
          <div className="edu-card">
            <img src="SVDClogo.png" alt="B.Sc" className="edu-logo" />
            <div className="edu-details">
              <h3>B.Sc (Computers)</h3>
              <p className="edu-inst">Rayalaseema University</p>
              <p className="edu-meta">🏫 Sri Venkateshwara Degree College Atmakur</p>
              <p className="edu-meta">📍 Kurnool, Andhra Pradesh, India</p>
              <p className="edu-meta">📄 GPA: 7.90/10.0</p>
            </div>
          </div>
        </div>

        <div className="edu-item" data-aos="fade-up" data-aos-delay="300">
          <div className="edu-year">2018 – 2020</div>
          <div className="edu-marker"></div>
          <div className="edu-card">
            <img src="SMTlogo.png" alt="12th" className="edu-logo" />
            <div className="edu-details">
              <h3>Higher Secondary Education (12th)</h3>
              <p className="edu-inst">AP Board</p>
              <p className="edu-meta">🏫 SMT Theresa Junior College Atmakur</p>
              <p className="edu-meta">📍 Kurnool, Andhra Pradesh, India</p>
              <p className="edu-meta">📄 GPA: 78.9%</p>
            </div>
          </div>
        </div>

        <div className="edu-item" data-aos="fade-up" data-aos-delay="400">
          <div className="edu-year">2017 – 2018</div>
          <div className="edu-marker"></div>
          <div className="edu-card">
            <img src="govtlogo.png" alt="10th" className="edu-logo" />
            <div className="edu-details">
              <h3>Secondary School Education (10th)</h3>
              <p className="edu-inst">AP Board</p>
              <p className="edu-meta">🏫 Government High School Atmakur</p>
              <p className="edu-meta">📍 Kurnool, Andhra Pradesh, India</p>
              <p className="edu-meta">📄 GPA: 8.20/10.0</p>
            </div>
          </div>
        </div>
      </div>

      <h1 id="abt-exe" data-aos="fade-up">Experience</h1>
      <div id="edu-timeline-1">
        <div className="edu-item" data-aos="fade-up" data-aos-delay="100">
          <div className="edu-year">2025</div>
          <div className="edu-marker"></div>
          <div className="edu-card">
            <img src="t-hublogo.jpeg" alt="Internship" className="edu-logo" />
            <div className="edu-details">
              <h3>Full Stack Developer Intern</h3>
              <p className="edu-inst">Technical-Hub, Surampalem, A.P</p>
              <p className="edu-meta">
                Developed MyNivas, a full-stack web application using the MERN stack to
                simplify hostel search, management, and bookings. Designed a user-friendly
                platform where students can explore hostels, check amenities, submit
                reviews, and book rooms seamlessly.
              </p>
              <h5 id="key">Key Achievements:</h5>
              <ul id="key-li">
                <li>Built RESTful APIs with Node.js/Express.js for hostel listings, reviews, and booking management.</li>
                <li>Designed responsive and intuitive UI using React.js with custom CSS modules and animations.</li>
                <li>Implemented MongoDB schemas for Hostels, Reviews, FAQs, and Users to support dynamic data.</li>
                <li>Added review submission system with star ratings and feedback stored in MongoDB.</li>
                <li>Integrated React Slick sliders for hostel image previews and dynamic review displays.</li>
                <li>Used GitHub for version control and deployed the app on Render & Vercel for live usage.</li>
              </ul>
              <h5 id="key-k">Tech Stack: React.js, Node.js, Express.js, MongoDB, GitHub, Render, Vercel</h5>
            </div>
          </div>
        </div>
      </div>

      

      
    </>
  );
};

export default About;

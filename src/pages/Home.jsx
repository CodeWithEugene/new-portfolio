import React from 'react';

const Home = () => {
  return (
    <div className="content">
      <div className="inner">
        <h1>Eugene Gabriel</h1>
        <p>Hi, I am a Web Developer, UI/UX Designer, and Data Scientist passionate about creating interactive web experiences and AI-driven solutions. From seamless interfaces to intelligent applications, I turn ideas into reality.</p>
      </div>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="https://drive.google.com/file/d/17NFdixfqdlau6mH4sdI0b3pc1xHHQIN6/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <ul className="icons">
        <li><a href="https://www.linkedin.com/in/eugene-mutembei-476248243/" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://github.com/CodeWithEugene/CodeWithEugene/blob/main/about.md" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://www.instagram.com/_.eugenius/" className="fa-brands fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://x.com/_eugeniuss" className="fa-brands fa-x-twitter" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
      </ul>
    </div>
  );
};

export default Home;
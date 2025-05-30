import React from 'react';

const About = () => {
  return (
    <article id="about">
      <h2 className="major">About</h2>
      <span className="image main"><img src="/images/DSC_0016 (1).jpg" alt="Profile" /></span>
      <p>I'm a <b>Web Development</b> and <b>Data Science</b> enthusiast with a passion for crafting sleek, functional websites and intelligent, data-driven solutions. I design and build <b>responsive</b> and <b>visually appealing</b> web experiences that prioritize <b>user engagement</b>, <b>performance</b>, and <b>scalability</b>.</p>
      <ul className="actions">
        <li><a href="https://technetium.netlify.app/" target="_blank" rel="noopener noreferrer" className="button">My Resume</a></li>
      </ul>
      <p>I am also the <b>Founder & CEO</b> of <b>Technetium Kenya</b>. I lead a team of talented programmers and designers dedicated to building high-performance, user-friendly solutions that empower businesses to grow in the digital space.</p>
      <ul className="actions">
        <li><a href="https://technetium.netlify.app/" target="_blank" rel="noopener noreferrer" className="button">Technetium Company</a></li>
      </ul>
      <ul className="icons">
        <li><a href="https://www.linkedin.com/showcase/technetium-company-kenya" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://www.tiktok.com/@technetium.kenya" className="fa-brands fa-tiktok" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://www.instagram.com/officialtechnetium/" className="fa-brands fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://www.youtube.com/@technetiumkenya" className="fa-brands fa-youtube" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
      </ul>
    </article>
  );
};

export default About;
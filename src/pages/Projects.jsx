import React from 'react';

const Projects = () => {
  return (
    <article id="work">
      <h2 className="major">Projects</h2>
      <span className="image main"><img src="/images/projects.png" alt="Projects" /></span>
      <p>Here are some of the projects I've worked on, showcasing my expertise in web development, UI/UX design, data science, and AI.</p>
      <p>Each project reflects my passion for creating intuitive user experiences, building intelligent solutions, and solving real-world challenges with technology.</p>
      
      <h3>General Projects</h3>
      <ul className="actions">
        <li><a href="https://github.com/CodeWithEugene/career-roadmaps" target="_blank" rel="noopener noreferrer" className="button">Tech Career Roadmaps</a></li>
      </ul>

      <h3>Web Development</h3>
      <ul className="actions">
        <li><a href="https://mali-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer" className="button">Mali E-Commerce</a></li>
        <li><a href="https://technetium.netlify.app/" target="_blank" rel="noopener noreferrer" className="button">Technetium</a></li>
        <li><a href="https://capstoneflourmills.com/" target="_blank" rel="noopener noreferrer" className="button">Capstone</a></li>
      </ul>

      <h3>Graphic Design</h3>
      <ul className="actions">
        <li><a href="https://drive.google.com/drive/folders/10XaaXfLo4ZNm4CgOTsgWsWOs250psvTk?usp=drive_link" target="_blank" rel="noopener noreferrer" className="button">Logos</a></li>
        <li><a href="https://drive.google.com/drive/folders/10VHeZ7tmcQsEDh_R9s0pH0SdLvHi0DXh?usp=drive_link" target="_blank" rel="noopener noreferrer" className="button">Posters</a></li>
        <li><a href="https://drive.google.com/drive/folders/1-DjDJqufvyqJEffxMPPcvsaz0ebyr9W3?usp=drive_link" target="_blank" rel="noopener noreferrer" className="button">Infographics</a></li>
      </ul>

      <h3>Data Science</h3>
      <ul className="actions">
        <li><a href="https://github.com/CodeWithEugene/M-Pesa-Statements-Analysis" target="_blank" rel="noopener noreferrer" className="button">M-Pesa Statements Analysis</a></li>
        <li><a href="https://github.com/CodeWithEugene/air-quality-in-nairobi" target="_blank" rel="noopener noreferrer" className="button">Air Quality In Nairobi</a></li>
        <li><a href="https://github.com/CodeWithEugene/covid19" target="_blank" rel="noopener noreferrer" className="button">Covid-19 Data</a></li>
      </ul>
    </article>
  );
};

export default Projects;
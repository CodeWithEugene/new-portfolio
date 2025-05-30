import React from 'react';

function Contact() {
  return (
    <article id="contact">
      <h2 className="major">Contact</h2>
      <form method="POST" action="https://formsubmit.co/eugenegabriel.ke@gmail.com">
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" required></textarea>
          </div>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="primary" /></li>
          <li><input type="reset" value="Reset" /></li>
        </ul>
      </form>
      
      <ul className="icons">
        <li><a href="https://www.linkedin.com/in/eugene-mutembei-476248243/" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://github.com/CodeWithEugene/CodeWithEugene/blob/main/about.md" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://www.instagram.com/_.eugenius/" className="fa-brands fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
        <li><a href="https://x.com/_eugeniuss" className="fa-brands fa-x-twitter" target="_blank" rel="noopener noreferrer"><span className="label"></span></a></li>
      </ul>
    </article>
  );
}

export default Contact;
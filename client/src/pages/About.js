// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>Welcome to the About page. We are a team of passionate developers building awesome applications with React.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to create high-quality, user-friendly web applications that solve real-world problems and enhance user experience.</p>
      <h2>Our Team</h2>
      <ul>
        <li><strong>John Doe</strong> - Full Stack Developer</li>
        <li><strong>Jane Smith</strong> - Frontend Developer</li>
        <li><strong>Emily Johnson</strong> - UX/UI Designer</li>
        <li><strong>Michael Brown</strong> - Backend Developer</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to <a href="mailto:info@example.com">contact us</a>.</p>
    </div>
  );
}

export default About;

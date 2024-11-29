import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Adds a cool overlay effect on the background */}
      <div className="content">
        <div className="text-content">
          <h1>Hello, I’m <span className="highlight">Hassan Sialvi</span></h1>
          <h2>Web Developer & Designer</h2>
          <p>
            Crafting digital experiences with the latest technologies and innovative designs.
            Specializing in full-stack web development and user-centered design.
          </p>
          <Link to="/about" className="cyberpunk-btn-link">
            <button className="cyberpunk-btn">
              <i className="fa-solid fa-plane"></i> About Me
            </button>
          </Link>
        </div>
        <div className="image-content">
          <img
            src="https://scontent.flhe44-1.fna.fbcdn.net/v/t39.30808-6/465711574_122138596256341683_574913339158425658_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYzN4WfuSxLOljPzRpYfroVAiYjtzezYtUCJiO3N7Ni1qyBLwGXkqxNYynmlP7c70_jBJBT2eB9j83IlGdvcUE&_nc_ohc=i3tEwTZi1X8Q7kNvgH4IxV-&_nc_zt=23&_nc_ht=scontent.flhe44-1.fna&_nc_gid=Ax7WckdZhEjIC6W1bBynsiF&oh=00_AYDWps2gUYRZh0FOXX2SEfFKMkVgMT6u4UuKcnKOgK9iUg&oe=673E3A11"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

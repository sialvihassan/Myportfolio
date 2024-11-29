import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant websites with modern web technologies.',
    icon: 'fa-code',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and user-friendly interfaces that deliver great user experiences.',
    icon: 'fa-paint-brush',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving search engine rankings through effective SEO strategies and techniques.',
    icon: 'fa-search',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Building scalable and robust e-commerce platforms for business growth.',
    icon: 'fa-shopping-cart',
  },
  {
    title: 'Pinterest marketing',
    description: 'Pinterest is a visual discovery engine for finding ideas like recipes, home decor, and more. ',
    icon: 'fa-brands fa-pinterest',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">My Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

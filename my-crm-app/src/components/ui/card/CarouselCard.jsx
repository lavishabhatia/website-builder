import React from "react";

const CarouselCard = React.memo(({ member }) => (
  <div className="carousel-card">
    <img src={member?.img} alt={member?.name} className="carousel-image" />
    <div className="carousel-info">
      <h3>{member?.name}</h3>
      <p>{member?.role}</p>
    </div>
    <div className="socials">
      {Object.entries(member?.socials).map(([key, url]) => (
        <a key={key} href={url} className="social-icon">
          <i className={`fab fa-${key}`}></i>
        </a>
      ))}
    </div>
  </div>
));

export default CarouselCard;

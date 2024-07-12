import React, { useEffect, useRef, useState } from "react";
import { teamMembers } from "../../data/data";
import "../../css/teamMember.css";

const TeamMember = () => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.clientWidth;
      const scrollWidth = trackRef.current.scrollWidth;
      const maxScroll = scrollWidth - trackWidth;

      let newScrollLeft = trackRef.current.scrollLeft + trackWidth;

      // If reaching the end, scroll back to the beginning
      if (newScrollLeft >= maxScroll) {
        newScrollLeft = 0;
      }

      trackRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (trackRef.current) {
      if (trackRef.current.scrollLeft === 0) {
        trackRef.current.scrollTo({
          left: trackRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        trackRef.current.scrollBy({
          left: -trackRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Calculate the width of a single card dynamically
    if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll(".carousel-card");
      if (cards.length > 0) {
        const card = cards[0];
        const cardStyle = window.getComputedStyle(card);
        const marginLeft = parseFloat(cardStyle.marginLeft);
        const marginRight = parseFloat(cardStyle.marginRight);
        const width = card.offsetWidth + marginLeft + marginRight;
        setCardWidth(width);
      }
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startAutoScroll();

    // Clean up function to clear the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="team-carousel">
      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div
        className="carousel-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="carousel-card">
            <img
              src={member.img}
              alt={member.name}
              className="carousel-image"
            />
            <div className="carousel-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="socials">
              {Object.entries(member.socials).map(([key, url]) => (
                <a key={key} href={url} className="social-icon">
                  <i className={`fab fa-${key}`}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default TeamMember;

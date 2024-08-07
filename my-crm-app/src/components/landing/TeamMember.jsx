import React, { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { teamMembers } from "../../data/data";
import "../../css/teamMember.css";
const CarouselCard = lazy(() => import("../ui/card/CarouselCard"));

const TeamMember = () => {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const nextSlide = useCallback(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.clientWidth;
      const scrollWidth = trackRef.current.scrollWidth;
      const maxScroll = scrollWidth - trackWidth;

      let newScrollLeft = trackRef.current.scrollLeft + trackWidth;
      if (newScrollLeft >= maxScroll) {
        newScrollLeft = 0;
      }

      trackRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  }, []);

  const prevSlide = useCallback(() => {
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
  }, []);

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(nextSlide, 5000);
    };

    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

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

  return (
    <div className="team-carousel py-16">
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
        <Suspense fallback={<div>Loading...</div>}>
          {teamMembers?.map((member, index) => (
            <CarouselCard key={index} member={member} />
          ))}
        </Suspense>
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default TeamMember;

import React, { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(5);
  const [cursorY, setCursorY] = useState(5);
  const [slowCursorX, setSlowCursorX] = useState(0);
  const [slowCursorY, setSlowCursorY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
      setIsMoving(true);
      clearTimeout(window.cursorTimeout);
      window.cursorTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(window.cursorTimeout);
    };
  }, []);

  useEffect(() => {
    const interpolate = () => {
      setSlowCursorX((prev) => prev + (cursorX - prev) * 0.09);
      setSlowCursorY((prev) => prev + (cursorY - prev) * 0.09);
      requestRef.current = requestAnimationFrame(interpolate);
    };

    requestRef.current = requestAnimationFrame(interpolate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [cursorX, cursorY]);

  const cursorStyle = {
    position: "fixed",
    top: `${slowCursorY}px`,
    left: `${slowCursorX}px`,
    transform: `translate(-50%, -50%) scale(${isMoving ? 1.5 : 1})`,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid purple",
    pointerEvents: "none",
    zIndex: 100,
    transition: "transform 0.15s ease-out",
    mixBlendMode: "difference",
  };

  // const smallCursorStyle = {
  //   position: "absolute",
  //   top: `${cursorY}px`,
  //   left: `${cursorX}px`,
  //   transform: `translate(-50%, -50%) scale(${isMoving ? 1.5 : 1})`,
  //   width: "8px",
  //   height: "8px",
  //   borderRadius: "50%",
  //   backgroundColor: "purple",
  //   pointerEvents: "none",
  //   zIndex: 101,
  //   transition: "transform 0.15s ease-out",
  // };

  return (
    <>
      <div style={cursorStyle}></div>
      {/* <div style={smallCursorStyle}></div> */}
    </>
  );
};

export default CustomCursor;

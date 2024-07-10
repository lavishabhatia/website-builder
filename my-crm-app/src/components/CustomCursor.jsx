import React, { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(5);
  const [cursorY, setCursorY] = useState(5);
  const [slowCursorX, setSlowCursorX] = useState(0);
  const [slowCursorY, setSlowCursorY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const offsetX = -1;
  const offsetY = -3;
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
    };
  }, []);

  //   useEffect(() => {
  //     const handleMouseMove = (event) => {
  //       setSlowCursorX(event.clientX + offsetX);
  //       setSlowCursorY(event.clientY + offsetY);
  //       setIsMoving(true);
  //       clearTimeout(window.cursorTimeout);
  //       window.cursorTimeout = setTimeout(() => {
  //         setIsMoving(false);
  //       }, 4000);
  //     };
  //     window.addEventListener("mousemove", handleMouseMove);
  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  useEffect(() => {
    const interpolate = () => {
      setSlowCursorX((prev) => prev + (cursorX - prev) * 0.09 + offsetX);
      setSlowCursorY((prev) => prev + (cursorY - prev) * 0.09 + offsetY);
      requestRef.current = requestAnimationFrame(interpolate);
    };
    requestRef.current = requestAnimationFrame(interpolate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [cursorX, cursorY]);

  return (
    <>
      <div
        className="fixed top-12 left-12 z-50 pointer-events-none border border-purple-300 transition-transform duration-150 ease-out"
        style={{
          left: `${slowCursorX}px`,
          top: `${slowCursorY}px`,
          transform: `translate(-50%, -50%) scale(${isMoving && 1.5})`,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      ></div>
      <div
        className="cursor hidden md:block absolute bg-purple-200 rounded-full pointer-events-none transition-transform duration-150 ease-out"
        style={{
          left: `${cursorX}px`,
          top: `${cursorY}px`,
          transform: `translate(-50%, -50%) scale(${isMoving && 1})`,
          width: "8px",
          height: "8px",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;

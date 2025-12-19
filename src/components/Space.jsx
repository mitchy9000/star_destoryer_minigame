import React, { useState, useEffect } from "react";
import Star, { STAR_SIZE } from "./Star";

function Space() {
  const [stars, setStars] = useState([]);

  // Generate a new star at a random position
  const createStar = () => {
    const x = Math.random() * (window.innerWidth - STAR_SIZE);
    const y = Math.random() * (window.innerHeight - STAR_SIZE);
    const id = Date.now() + Math.random(); // unique ID

    setStars((prevStars) => [...prevStars, { id, position: { x, y } }]);
  };

  const destroyStar = (id) => {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(createStar, 2500);

    return () => clearInterval(interval); // cleanup interval on unmount
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "black", overflow: "hidden" }}>
      {stars.map((star) => (
        <Star key={star.id} id={star.id} position={star.position} destroyStar={destroyStar} />
      ))}
    </div>
  );
}

export default Space;

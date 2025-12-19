import React, { useRef, useEffect } from "react";

const STAR_SIZE = 20;

function Star({ id, position, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    // Focus the star on mount
    starRef.current?.focus();
  }, []);

  return (
    <svg
      ref={starRef}
      tabIndex="0"
      onClick={() => destroyStar(id)}
      width={STAR_SIZE}
      height={STAR_SIZE}
      viewBox="0 0 24 24"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "pointer",
        outline: "none", // remove default focus outline
        transition: "filter 0.2s",
      }}
    >
      <polygon
        points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
        fill="yellow"
      />
      <style>
        {`
          svg:focus polygon {
            filter: drop-shadow(0 0 10px white);
          }
        `}
      </style>
    </svg>
  );
}

export default Star;
export { STAR_SIZE };

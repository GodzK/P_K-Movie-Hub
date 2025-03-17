import { useEffect, useRef } from "react";
import React, { JSX } from "react";
import { gsap } from "gsap";
import "../styles/Background.css";

interface BackgroundProps {
  items: JSX.Element[];
  gradientColor?: string;
}

const Background: React.FC<BackgroundProps> = ({
  items = [],
  gradientColor = "black",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for each row

  // Ensure the grid has 28 items (4 rows x 7 columns)
  const totalItems = 28;
  const defaultItems: JSX.Element[] = Array.from(
    { length: totalItems },
    (_, index) => (
      <div key={`default-${index}`} style={{ width: "100%", height: "100%", backgroundColor: "#333" }}>
        {/* Placeholder content */}
      </div>
    )
  );
  const combinedItems: JSX.Element[] = items.length > 0
    ? [...items, ...defaultItems].slice(0, totalItems) // Combine and trim to 28 items
    : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const maxMoveAmount = 300;
    const baseDuration = 4; // Adjust the overall animation duration
    const speeds = [4, 5, 6, 7]; // Different speeds for each row

    const animations = rowRefs.current.map((row, index) => {
      if (row) {
        const direction = index % 2 === 0 ? 1 : -1; // Alternate movement directions
        const moveAmount = maxMoveAmount * direction;

        // Infinite animation loop
        return gsap.to(row, {
          x: moveAmount,
          duration: baseDuration + speeds[index % speeds.length],
          ease: "linear",
          repeat: -1,
          yoyo: true, 
        });
      }
      return null;
    });


    return () => {
      animations.forEach((animation) => {
        if (animation) animation.kill();
      });
    };
  }, []); 

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="row"
              ref={(el) => {
                rowRefs.current[rowIndex] = el; 
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const itemIndexInArray = rowIndex * 7 + itemIndex;
                const content = combinedItems[itemIndexInArray];
                return (
                  <div key={`item-${rowIndex}-${itemIndex}`} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: "#111" }}>
                      {content}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default Background;
"use client";

import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "35s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden",
        "mask-image:linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] md:w-[450px] max-w-full relative rounded-2xl border-2 flex-shrink-0 border-yellow-500 px-4 md:px-8 py-4 md:py-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.5))",
            }}
            key={item.name}
          >
            <blockquote>
              <div className="relative z-20 flex flex-col md:flex-row items-start gap-4">
                <img
                  className="w-full md:w-1/2 h-40 md:h-60 object-cover"
                  src={item.image}
                  alt={`${item.name}'s photo`}
                />
                <div className="flex flex-col">
                  <span className="text-sm md:text-base leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                  <span className="mt-2 flex flex-col">
                    <span className="text-lg md:text-xl font-bold leading-[1.6] text-yellow-200">
                      {item.name}
                    </span>
                    <span className="text-xl md:text-2xl font-bold leading-[1.6] text-rose-500">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

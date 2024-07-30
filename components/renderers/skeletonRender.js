"use client";
import React, { useEffect, useState } from "react";

function SkeletonRender() {
  const [skeletonCount, setSkeletonCount] = useState(9); // Default to 9

  useEffect(() => {
    const updateSkeletonCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSkeletonCount(9); // xl: 3 columns * 3 rows
      } else if (width >= 1024) {
        setSkeletonCount(9); // lg: 3 columns * 3 rows
      } else if (width >= 768) {
        setSkeletonCount(6); // md: 2 columns * 3 rows
      } else {
        setSkeletonCount(6); // sm and xs: 1 column * 6 rows
      }
    };

    // Update skeleton count on mount and on window resize
    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  return <div>skeletonRender</div>;
}

export default SkeletonRender;

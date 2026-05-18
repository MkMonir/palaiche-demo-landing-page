"use client";

import { useEffect, useState } from "react";

// Custom hook to track the sticky state based on scroll position
const useSticky = (height) => {
  // Initialize the sticky state as false
  const [sticky, setSticky] = useState(false);

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Function to check the scroll position and update the sticky state
    const stickyHeader = () => {
      setSticky(window.scrollY > height);
    };

    window.addEventListener("scroll", stickyHeader);
    stickyHeader();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, [height]);

  // Return the sticky state
  return {
    sticky,
  };
};

export default useSticky;

import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';


export default function Test() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize the smooth-scrollbar on the container
    if (containerRef.current) {
      const scrollbar = Scrollbar.init(containerRef.current, {
        damping: 0.05, // Adjust damping as needed
      });
      
      // Optional: You can add event listeners, custom options, etc., here.

      // Clean up the scrollbar when the component unmounts
      return () => {
        scrollbar.destroy();
      };
    }
  }, []);
  return (
  <>
  <div
      ref={containerRef}
      className="w-screen h-20 bg-gray-200"
      style={{ overflow: 'hidden' }}
    >
      <div className="w-80 h-20 bg-blue-500">
        Content goes here
      </div>
    </div>
  </>
 
  )
}

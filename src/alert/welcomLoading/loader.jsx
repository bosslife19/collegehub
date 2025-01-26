import React, { useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    // Set timeout for 3 seconds to simulate loading
    const timer = setTimeout(() => {
      onComplete(); // Notify the parent to switch screens
    }, 3000);
 
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onComplete]);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {/* Lottie Player */}
      <DotLottieReact
      src="https://lottie.host/7a71d7fa-b1a3-49c2-b932-b41f63acda04/cdKQ4oe1yz.lottie"
      loop
      autoplay
    />
     </div>
  );
};

export default Loader;
 

 

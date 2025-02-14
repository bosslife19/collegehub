import React, { useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WelcomeLottie = ({ onComplete }) => {
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
      src="https://lottie.host/e3020020-de0b-4da3-8cb5-447b55aba8fd/FivSExQjmh.lottie"
      loop
      autoplay
    />
     </div>
  );
};

export default WelcomeLottie;
 
 

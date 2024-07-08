import React from "react";

const LoadingSpinner = ({ size = "md" }) => {
  const sizeClass = `loading-${size}`;
  return (
    <div>
      <span className={`loading loading-ball ${sizeClass}`}></span>
    </div>
  );
};

export default LoadingSpinner;

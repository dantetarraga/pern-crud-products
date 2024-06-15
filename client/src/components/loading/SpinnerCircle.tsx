import React from "react";

interface SpinnerCircleProps {
  size?: "small" | "medium" | "large";
  color?: string;
  thickness?: number;
  speed?: number;
}

const SpinnerCircle: React.FC<SpinnerCircleProps> = ({
  size = "medium",
  color = "currentColor",
  thickness = 3,
  speed = 1,
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const spinSpeed = `animate-spin-${speed}`;

  return (
    <div
      className={`rounded-full border-t-[${thickness}px] border-${color} ${sizeClasses[size]} ${spinSpeed}`}
      style={{ borderColor: `${color} transparent transparent transparent` }}
    />
  );
};

export default SpinnerCircle;

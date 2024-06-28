import React, { useState } from "react";
import { Button, styled, keyframes } from "@mui/material";

const growthSpin = keyframes`
0% {
transform: scale(1.0) rotate(0deg)
}
100% {
transform: scale(1.2) rotate(360deg)
}
`;

export const CustomPlayButton = ({
  icon,
  label,
  ismobile,
  onClick,
  ...other
}) => {
  const [isHover, setIsHover] = useState(false);

  const StyledButton = styled(Button)(() => ({
    padding: "10px 30px",
    fontSize: ismobile ? "9px" : "18px",
    fontWeight: 700,
    color: "#000000",
    backgroundColor: "yellow",
    borderRadius: "30px",
    textTransform: "math-auto",
    "&:hover": {
      backgroundColor: "yellow",
    },
  }));

  const StyledIcon = styled("img")(() => ({
    animation: isHover ? `${growthSpin} 1s ease 0s 1 forwards` : "none",
  }));
  return (
    <StyledButton
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      startIcon={<StyledIcon src={icon} alt="play_icon" />}
      onClick={onClick}
      {...other}
    >
      {label}
    </StyledButton>
  );
};

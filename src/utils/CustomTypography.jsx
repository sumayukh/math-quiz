import React from "react";
import { Typography, styled } from "@mui/material";

export const CustomTypography = ({
  color,
  size,
  weight,
  children,
  ...other
}) => {
  const StyledTypography = styled(Typography)(({ color, size, weight }) => ({
    color: color,
    fontSize: size,
    fontWeight: weight,
  }));
  return (
    <StyledTypography color={color} size={size} weight={weight} {...other}>
      {children}
    </StyledTypography>
  );
};

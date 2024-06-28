import React from "react";
import { IconButton, styled } from "@mui/material";

export const CustomArrowButton = ({
  type,
  slide,
  icon,
  altText,
  onClick,
  ...other
}) => {
  const StyledIconButton = styled(IconButton)(({ type, slide }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 22px",
    backgroundColor:
      type?.toUpperCase() === "NEXT"
        ? "yellow"
        : slide === 0
        ? "#595959"
        : "yellow",
    "&:hover": {
      backgroundColor:
        type?.toUpperCase() === "NEXT"
          ? "yellow"
          : slide === 0
          ? "#595959"
          : "yellow",
      transform:
        type?.toUpperCase() === "NEXT"
          ? "scale(1.05)"
          : slide === 0
          ? "scale(1)"
          : "scale(1.05)",
      boxShadow:
        type?.toUpperCase() === "NEXT"
          ? "0 0 10px 5px rgba(255, 255, 0, 0.15)"
          : slide === 0
          ? "none"
          : "0 0 10px 5px rgba(255, 255, 0, 0.15)",
    },
  }));
  return (
    <StyledIconButton
      disableRipple
      type={type}
      slide={slide}
      onClick={onClick}
      {...other}
    >
      <img src={icon} alt={altText} />
    </StyledIconButton>
  );
};

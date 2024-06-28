import React from "react";
import { Grid, Box } from "@mui/material";
import { CustomTypography } from "../utils";
export const Footer = () => {
  return (
    <Grid container position="absolute" bottom={0} zIndex={10}>
      <Grid item sm={12} py={1}>
        <Box p={1}>
          <CustomTypography
            sx={{ opacity: 0.7 }}
            size="13px"
            weight={500}
            color="#ffffff"
          >
            Powered by CLOUDIFYAPPS
          </CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

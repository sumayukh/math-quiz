import { useState, useEffect } from "react";
import { Grid, Box, IconButton, styled } from "@mui/material";
import { lofiScore, logoIcon, muteIcon, unmuteIcon } from "../assets";
import { CustomTypography } from "../utils";

export const Header = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const CustomVolumeButton = styled(IconButton)(() => ({
    borderRadius: "10px",
    "&:hover": {
      backdropFilter: "contrast(.75)",
    },
  }));

  const handleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handlePlayAudio = () => {
    if (!playAudio) {
      const audioNode = document.getElementById("bg-music");
      audioNode.play();
      setPlayAudio(true);
      document.removeEventListener("click", handlePlayAudio);
    }
  };

  useEffect(() => {
    if (playAudio) {
      const audioNode = document.getElementById("bg-music");
      audioNode.muted = isMuted;
      isMuted ? audioNode.pause() : audioNode.play();
    }
  }, [isMuted, playAudio]);

  useEffect(() => {
    document.addEventListener("click", handlePlayAudio);
    return () => {
      document.removeEventListener("click", handlePlayAudio);
    };
  }, []);

  return (
    <Grid
      container
      position="fixed"
      top={0}
      justifyContent="space-between"
      zIndex={10}
    >
      <Grid item sm={6} py={1}>
        <Box display="flex" alignItems="center">
          <Box p={1}>
            <img src={logoIcon} alt="logo_icon" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={0.4}
            px={0.2}
          >
            <CustomTypography
              textAlign="start"
              weight={700}
              size="14px"
              color="#ffffff"
            >
              Cloudifyapp Pvt. Ltd.
            </CustomTypography>
            <CustomTypography
              textAlign="start"
              weight={500}
              size="11px"
              color="#ffffff"
              sx={{ opacity: 0.9 }}
            >
              By John Doe
            </CustomTypography>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} py={1}>
        <Box display="flex" justifyContent="end" p={1}>
          <CustomVolumeButton
            size="large"
            sx={{
              borderRadius: "10px",
              "&:hover": {
                backdropFilter: "contrast(.75)",
              },
            }}
            disableRipple
            onClick={() => handleMute()}
          >
            {isMuted ? (
              <img src={muteIcon} alt="mute_icon" />
            ) : (
              <img src={unmuteIcon} alt="unmute_icon" />
            )}
          </CustomVolumeButton>
          <audio id="bg-music" autoPlay loop style={{ display: "none" }}>
            <source src={lofiScore} type="audio/mpeg" />
          </audio>
        </Box>
      </Grid>
    </Grid>
  );
};

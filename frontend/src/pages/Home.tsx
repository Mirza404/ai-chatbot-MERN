import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import TypingAnim from "../typer/TypingAnim";
import Footer from "../components/footer/Footer";
import ButtonAppBar from "../components/navbar/ButtonAppBar";
import React from "react";

const Header = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      width={"100%"}
      height={"100%"}
      flex={"flex"}
      mx={"auto"}
      sx={{
        overflowX: "hidden",
        backgroundImage: "url('/bgpic.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: "3",
        }}
      >
        <Box>
          {/* <ButtonAppBar/> */}
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            className="image-inverted rotate"
            src="5.png"
            alt="robot"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chat"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              maxWidth: "950px", // Set a maximum width
              maxHeight: "1000px", // Set a maximum height
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #000",
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Header;

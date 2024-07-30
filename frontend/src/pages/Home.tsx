import { Box } from "@mui/material";
import TypingAnim from "../typer/TypingAnim";
import React from "react";

const Header = () => {
  return (
    <Box width={"100%"} height={"100%"} flex={"flex"} mx={"auto"}>
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
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="2.png"
            alt="robot"
            style={{ width: "200px", margin: "auto"}} 
          />
          <img
          className="image-inverted rotate"
            src="4.png"
            alt="robot"
            style={{ width: "200px", margin: "auto"}} 
          />
        </Box>
        <Box sx={{display:"flex", width:"100%", mx:"auto"}}>
          <img src="chat.png" alt="chat" style={{display:"flex", margin:"auto", width:"60%", borderRadius:20, boxShadow: "-5px -5px 105px #64f3d5"}}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

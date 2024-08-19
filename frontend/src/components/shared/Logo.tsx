import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link to={"/"} style={{display: "flex", alignItems: "center", textDecoration: "none"}}>
        <img
          src="5.png"
          alt="openai"
          width={"40px"}
          height={"40px"}
          className="image-inverted"
        />
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: " 600",
            fontFamily: "Rubik, sans-serif",
            textShadow: "2px 2px 20px #000",
          }}
        >
          <span style={{ fontSize: "20px"}}>MERN</span>-GPT
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;

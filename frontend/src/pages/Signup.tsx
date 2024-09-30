import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing Up...", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.dismiss("signup");
      toast.success("Signed In Succesfully");
    } catch (error) {
      console.log(error);
      toast.dismiss("signup");
      toast.error("Sign Up Failed", { id: "signup" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth, navigate]);

  return (
    <Box
      width={"100%"}
      minHeight={"85vh"}
      maxHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className="signup-box"
      sx={{
        backgroundImage: 'url("/bgpic.png")', // Update with the correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        className="signup-inner-box" 
      >
        <form
          onSubmit={handleSubmit}
          action=""
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundcolor:"#021207 !important",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
              sx={{ color: 'white !important' }} // Add font color here
            >
              Sign up
            </Typography>
            <CustomizedInput type="text" name="name" label="Name" />
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 2,
                mt: 2,
                width: "100%",
                borderRadius: 2,
                bgcolor: "00fffc",
                color: "white !important",
                ":hover": {
                  bgcolor: "white",
                  color: "black !important",
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;

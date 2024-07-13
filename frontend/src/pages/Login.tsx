import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In...", { id: "login" });
      await auth?.login(email, password);
      toast.dismiss("login");
      toast.success("Signed In Succesfully");
    } catch (error) {
      console.log(error);
      toast.dismiss("login");
      toast.error("Sign In Failed", { id: "login" });
    }
  };

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="2.png" alt="Robot" style={{ width: "400px" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
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
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 2,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

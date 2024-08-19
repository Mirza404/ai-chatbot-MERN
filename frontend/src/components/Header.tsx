import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
import ButtonAppBar from "./navbar/ButtonAppBar";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#77A681"
                to="/chat"
                text="Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#0C5622"
                to="/"
                text="Log out"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
            <NavigationLink
                bg="#77A681"
                to="/login"
                text="Log in"
                textColor="black"
              />
              <NavigationLink
                bg="#0C5622"
                to="/signup"
                text="Sign up"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import './index.css'; // Ensure this line is present


function App() {
  const auth = useAuth();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        { auth?.isLoggedIn && auth.user &&(
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

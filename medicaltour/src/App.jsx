import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/LoginPage";
import Register from "./container/Register";
import EditProfile from "./container/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <EditProfile /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

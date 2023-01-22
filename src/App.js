import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@mui/icons-material";
import Profile from "./pages/Profile/profile";
import Aboutus from "./pages/Aboutus/Aboutus";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/about-us" element={<Aboutus/>} />
        <Route exact path="/profile" element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
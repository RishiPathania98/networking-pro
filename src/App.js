import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Aboutus from "./pages/AboutUs/Aboutus";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      <Aboutus/>
    </div>
  );
}

export default App;

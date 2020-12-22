import Particles from "react-particles-js";
import Search from "./Search";
import "./app.css";

const particleParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  return (
    <div>
      <Particles className="particles" params={particleParams} />
      <Search />
    </div>
  );
}

export default App;

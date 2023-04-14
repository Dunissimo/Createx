import clsx from "clsx";
import Navbar from "./components/Navbar/Navbar";
import Event from "./UI/Cards/Event/Event";

const App = () => {
  const theme = "light";
  return (
    <div className={clsx("App", theme)}>
      <Navbar theme={theme} />
      <div className="container" style={{ width: "390px", height: "323px" }}>
        <Event orientation="vertical" />
      </div>
    </div>
  );
};

export default App;

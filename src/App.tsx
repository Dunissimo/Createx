import clsx from "clsx";
import Navbar from "./components/Navbar/Navbar";
import Button from "./UI/Button/Button";
import Checkbox from "./UI/Form/Checkbox/Checkbox";
import Input from "./UI/Form/Input/Input";

const App = () => {
  const theme = "light";

  return (
    <div className={clsx("App", theme)}>
      <Navbar theme={theme} />
    </div>
  );
};

export default App;

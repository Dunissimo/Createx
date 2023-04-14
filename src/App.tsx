import clsx from "clsx";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Button from "./UI/Button/Button";
import Checkbox from "./UI/Form/Checkbox/Checkbox";
import Input from "./UI/Form/Input/Input";
import SocialMedia from "./UI/SocialMedia/SocialMedia";

const App = () => {
  const theme = "light";

  return (
    <div className={clsx("App", theme)}>
      <Navbar theme={theme} />
      <Footer />
    </div>
  );
};

export default App;

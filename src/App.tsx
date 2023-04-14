import clsx from "clsx";
import Navbar from "./components/Navbar/Navbar";
import CourseUI from "./UI/Cards/Course/Course";
import { useUrl } from "./utils/hooks";

const App = () => {
  const theme = "light";
  return (
    <div className={clsx("App", theme)}>
      <Navbar theme={theme} />
    </div>
  );
};

export default App;

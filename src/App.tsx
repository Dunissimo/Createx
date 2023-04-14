import clsx from "clsx";
import Navbar from "./components/Navbar/Navbar";
import CourseUI from "./UI/Cards/Course/Course";
import Direction from "./UI/Cards/Direction/Direction";
import Event from "./UI/Cards/Event/Event";
import Team from "./UI/Team/Team";
import { ICourse } from "./utils/interfaces";

const App = () => {
  const course: ICourse = {
    type: "Design",
    author: "Dunissimo",
    price: 10000,
    header: "GOGOGOGO!",
    imgUrlWithExtension: "imgNotFound.svg",
  };
  const theme = "light";
  return (
    <div className={clsx("App", theme)}>
      <div
        style={{
          margin: "2rem",
        }}
      >
        <Team />
      </div>
    </div>
  );
};

export default App;

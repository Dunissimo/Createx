import clsx from "clsx";
import Navbar from "./components/Navbar/Navbar";
import CourseUI from "./UI/Cards/Course/Course";
import Direction from "./UI/Cards/Direction/Direction";
import Event from "./UI/Cards/Event/Event";
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
        className=""
        style={{
          width: "390px",
          margin: "2rem",
        }}
      >
        <Direction />

        {/* <Event event={} orientation="vertical" /> */}
        <CourseUI course={course} orientation="vertical" />
      </div>
    </div>
  );
};

export default App;

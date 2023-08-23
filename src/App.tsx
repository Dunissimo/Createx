import clsx from "clsx";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import AboutPage from "@pages/About/AboutPage";
import BlogPage from "@pages/Blog/BlogPage";
import ContactsPage from "@pages/Contacts/ContactsPage";
import CoursesPage from "@pages/Courses/CoursesPage";
import EventsPage from "@pages/Events/EventsPage";
import HomePage from "@pages/Home/HomePage";
import NotFound from "@pages/NotFound/NotFound";
import CoursePage from "@pages/Courses/Course/CoursePage";
import { fetchCourses } from "@redux/slices/coursesSlice";
import { useAppDispatch } from "@utils/hooks";

const App = () => {
  const theme = "light";
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div className={clsx("App", theme)}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CoursePage />} />

        <Route path="/events" element={<EventsPage />} />

        <Route path="/blog" element={<BlogPage />} />

        <Route path="/contacts" element={<ContactsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

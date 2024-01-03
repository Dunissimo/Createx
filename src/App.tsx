import Footer from "@components/Footer/Footer";
import AboutPage from "@pages/About/AboutPage";
import BlogPage from "@pages/Blog/BlogPage";
import ContactsPage from "@pages/Contacts/ContactsPage";
import CoursePage from "@pages/Courses/Course/CoursePage";
import CoursesPage from "@pages/Courses/CoursesPage";
import EventsPage from "@pages/Events/EventsPage";
import HomePage from "@pages/Home/HomePage";
import NotFound from "@pages/NotFound/NotFound";
import clsx from "clsx";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostPage from "./pages/Blog/Post/Post";
import EventPage from "./pages/Events/Event/EventPage";

const App = () => {
  const theme = "light";

  const showToastMessage = () => {
    toast.info(
      "Загрузка данных может происходить дольше обычного. Это связано с тем, что я использую бесплатный хостинг. Прошу понять и простить",
      {
        position: toast.POSITION.TOP_RIGHT,
      },
    );
  };

  useEffect(() => {
    if (localStorage.getItem("isToastShowed") !== "yes") {
      showToastMessage();
    }

    localStorage.setItem("isToastShowed", "yes");
  }, []);

  return (
    <div className={clsx("App", theme)}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CoursePage />} />

        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventPage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostPage />} />

        <Route path="/contacts" element={<ContactsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />

      <Footer />
    </div>
  );
};

export default App;

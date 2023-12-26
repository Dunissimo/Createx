import clsx from "clsx";
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
import EventPage from "./pages/Events/Event/EventPage";
import PostPage from "./pages/Blog/Post/Post";

const App = () => {
  const theme = "light";

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
      <Footer />
    </div>
  );
};

export default App;

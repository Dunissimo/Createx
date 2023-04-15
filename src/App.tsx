import clsx from "clsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactsPage from "./pages/Contacts/ContactsPage";
import CoursesPage from "./pages/Courses/CoursesPage";
import EventsPage from "./pages/Events/EventsPage";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  const theme = "light";

  return (
    <div className={clsx("App", theme)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CourseDetails from "../Courses/CourseDetails";
import Courses from "../Courses/Courses";
import CoursesInfo from "../Courses/CoursesInfo";
import Main from "../layout/Main/Main";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/Courses-info',
        element: <CoursesInfo></CoursesInfo>,
      },
    ]
  }

])
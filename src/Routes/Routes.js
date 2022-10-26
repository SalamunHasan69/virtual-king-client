import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CoursesInfo from "../Courses/CoursesInfo";
import CurrentCourse from "../Courses/CurrentCourse";
import Main from "../layout/Main/Main";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/courses-info',
        element: <CoursesInfo></CoursesInfo>,
        loader: () => fetch(`http://localhost:5000/course/`)
      },
      {
        path: '/course/:id',
        element: <CurrentCourse></CurrentCourse>,
        loader: (params) => fetch(`http://localhost:5000/course/${params.id}`)
      },
    ]
  }

])
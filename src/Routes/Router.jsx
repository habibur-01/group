import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage/>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);
  export default(router);
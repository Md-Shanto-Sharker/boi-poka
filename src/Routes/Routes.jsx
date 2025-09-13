import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Errorpage></Errorpage>,
    children: [
      { index: true,
        loader:()=>fetch('/public/bookVibe.json'),
        path:'/', Component: Home },
    //   { path: "about", Component: About },
    ],
  },
]);

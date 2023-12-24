import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components 
import UserName from "./components/UserName";
import Password from "./components/Password";
import Rest from "./components/Rest";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Recovery from "./components/Recovery";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserName></UserName>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/rest",
      element: <Rest></Rest>,
    },
    {
      path: "/profile",
      element: <Profile></Profile>,
    },
    {
      path: "/password",
      element: <Password></Password>,
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>,
    },
    {
      path: "/recovery",
      element: <Recovery></Recovery>,
    },
  ]);
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;

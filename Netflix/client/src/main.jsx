import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Section1 from "./components/SignUp/Section1.jsx";
import Section2 from "./components/SignUp/Section2.jsx";
import Section3 from "./components/SignUp/Section3.jsx";
import Section4 from "./components/SignUp/Section4.jsx";
import Section5 from "./components/SignUp/Section5.jsx";
import Home from "./components/Home/Home.jsx";
import { Provider } from "react-redux";
import store from "./reduxStore/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    children: [
      { path: "", element: <Section1 /> },
      { path: "regform", element: <Section2 /> },
      { path: "plan", element: <Section3 /> },
      { path: "plan/select", element: <Section4 /> },
      { path: "payment", element: <Section5 /> },
    ],
  },
  { path: "home", element: <Home /> },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

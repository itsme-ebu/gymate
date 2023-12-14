import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  matchPath,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import PageOne from "./components/PageOne.jsx";
import Schedule from "./pages/Schedule.jsx";
import Monday from "./pages/Schdule/Monday.jsx";
import Friday from "./pages/Schdule/Friday.jsx";
import Saturday from "./pages/Schdule/Saturday.jsx";
import Wednesday from "./pages/Schdule/Wednesday.jsx";
import Tuesday from "./pages/Schdule/Tuesday.jsx";
import Thursday from "./pages/Schdule/Thursday.jsx";
import Price from "./pages/Price.jsx";
import PageTwo from "./components/PageTwo.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Classes from "./pages/Classes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/gallery/" element={<Gallery />}>
        <Route path="page-1" element={<PageOne />} />
        <Route path="page-2" element={<PageTwo />} />
      </Route>
      <Route path="/schedule/" element={<Schedule />}>
        <Route path="monday" element={<Monday />} />
        <Route path="friday" element={<Friday />} />
        <Route path="saturday" element={<Saturday />} />
        <Route path="wednesday" element={<Wednesday />} />
        <Route path="tuesday" element={<Tuesday />} />
        <Route path="thursday" element={<Thursday />} />
      </Route>
      <Route path="pricing" element={<Price />} />
      <Route path="blog" element={<Blog />} />
      <Route path="classes" element={<Classes />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

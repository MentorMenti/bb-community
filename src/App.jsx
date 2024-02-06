import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Body from "./components/Body";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: [<NavBar />, <Footer />, <Body />],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

export default App;

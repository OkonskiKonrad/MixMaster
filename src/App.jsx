import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages/index.js";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleCocktailLoader } from "./pages/Cocktail.jsx";
import {action as newsletterAction} from "./pages/Newsletter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement:<SinglePageError/>,
        loader:singleCocktailLoader,

      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action:newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer.jsx";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.jsx";


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

export default App;

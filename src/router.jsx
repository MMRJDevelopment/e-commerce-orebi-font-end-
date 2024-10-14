import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./page/Home";
import Shop from "./page/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Shop />} />
    </Route>
  )
);

export default router;

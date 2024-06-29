import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./page/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;

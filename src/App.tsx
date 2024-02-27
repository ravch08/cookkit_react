import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home, Layout, Page404, RecipeDetail } from "./component/utils/helper";
import GlobalState from "./context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products/:id" element={<RecipeDetail />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  return (
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  );
}

export default App;

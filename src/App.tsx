import { Route, Routes } from "react-router-dom";
import { NotFoundPage, SkipPage } from "./pages";
import type { AppRoute } from "./interfaces";

const routes: AppRoute[] = [
  { path: "/", element: <SkipPage /> },
  { path: "*", element: <NotFoundPage /> },
];

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;

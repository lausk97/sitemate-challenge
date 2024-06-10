import { BrowserRouter, Routes, Route } from "react-router-dom";
import Issues from "./components/issues/Issues";
import NotFoundPage from "./components/NotFoundPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Issues} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

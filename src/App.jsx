import HomePageContainer from "./pages/HomePageContainer";
import AppPageContainer from "./pages/AppPageContainer";
import history from "./context/history";
import { Route, Routes, BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes history={history}>
        <Route path="/app"  exact element={<AppPageContainer />} />
        <Route path="/"  exact  element={<HomePageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

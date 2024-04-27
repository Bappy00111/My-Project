import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PrivetRoutes from "./routes/PrivetRoutes";
import Profile from "./components/common/Profile";
import LoginPage from "./components/LoginPage";
import Regester from "./components/Regester";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Routes>
      <Route element={<PrivetRoutes />}>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile" />
      </Route>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Regester />} path="/regester" />
      <Route element={<ErrorPage />} path="*" />
    </Routes>
  );
}

export default App;

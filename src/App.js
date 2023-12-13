import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import NotFound from "./Components/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/registration/" Component={Registration} />
      <Route exact path="/" Component={HomePage} />
      <Route exact path="/login/" Component={Login} />
      <Route Component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default App;

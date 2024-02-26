import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Footer from "./components/footer/footer";
import LoginForm from "./pages/Login/form/loginForm";
import CreateGame from "./pages/CreateGame";
import Login from "./pages/Login";
import UsePrivateRoute from "./hooks/usePrivateRoute";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("RandomGameAuth")) || false
  );

  return (
    <>
      <BrowserRouter>
        {isAuth ? <Header /> : ""}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/creategame"
            element={
              <UsePrivateRoute>
                <CreateGame />
              </UsePrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

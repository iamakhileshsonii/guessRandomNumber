import React, { useState } from "react";
import Home from "../pages/Home";

const UsePrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("RandomGameAuth"))
  );

  return isAuth ? children : <Home />;
};

export default UsePrivateRoute;

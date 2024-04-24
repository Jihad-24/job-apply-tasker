import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import TanstackProvider from "./providers/TanstackProvider.jsx";
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <SignUp/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TanstackProvider>
        <RouterProvider router={router} />
      </TanstackProvider>
    </AuthProvider>
  </React.StrictMode>
);

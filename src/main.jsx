import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddOrder from "./components/AddOrder.jsx";
import UpdateOrder from "./components/UpdateOrder.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://crud-operation-server-jet.vercel.app/order"),
      },
      {
        path: "addorder",
        element: <AddOrder></AddOrder>,
      },
      {
        path: "updateorder/:id",
        element: <UpdateOrder></UpdateOrder>,
        loader: ({ params }) =>
          fetch(`https://crud-operation-server-jet.vercel.app/order/${params.id}`),
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path:"users",
        element:<Users></Users>,
        loader : ()=>fetch("https://crud-operation-server-jet.vercel.app/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);

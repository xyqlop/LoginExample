import "./App.css";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import Profile from "./components/pages/Profile";
import { lazy, Suspense } from "react";
import Loading from "./components/pages/Loading";
const Home = lazy(() => import("./components/pages/Home"));

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: "/home/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <Router router={router} />;
}

export default App;

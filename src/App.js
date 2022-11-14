import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Error from "./pages/Error";
import PrivateRoutes from "./pages/PrivateRoutes";

/* todo--- check login credentials and for users to get to home page*/
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element = {<PrivateRoutes/>}>
        <Route path="/home" exact element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

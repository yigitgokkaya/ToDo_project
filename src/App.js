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
import Navbar from './pages/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

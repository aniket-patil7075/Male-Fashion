import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Signup from "./assets/Signup";
import Signin from "./assets/Signin";
import Dashboard from "./user/Dashboard";
import PrivateRoute from "./assets/Private";
import ForgotPassword from "./assets/ForgotPassword";
import Orders from "./user/Orders";
import Profile from "./user/Profile";
import AdminRoute from "./assets/AdminRoute";
import AdminDashboard from "./admin/AdminDashboard";
import CreateCategory from "./admin/CreateCategory";
import CreateProduct from "./admin/CreateProduct";
import Users from "./admin/users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          {/* {Private Routes for users} */}
          <Route path="Dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/Orders" element={<Orders />} />
            <Route path="user/profile" element={<Profile />} />
          </Route>

          {/* {Admin Routes} */}
          <Route path="Dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>} />
            <Route path="admin/Createcategory" element={<CreateCategory/>} />
            <Route path="admin/Createproduct" element={<CreateProduct/>} />
            <Route path="admin/Users" element={<Users/>} />
          </Route>

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

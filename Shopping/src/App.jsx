import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Signup from "./assets/Signup";
import Signin from "./assets/Signin";
import Shop from "./assets/Shop";
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
import ShoppingCart from "./assets/ShoppingCart";
import ShopDetails from "./assets/ShopDetails"
import CheckOut from "./assets/CheckOut"
import BlogDetails from "./assets/BlogDetails"
import Blog from "./assets/Blog";
import Products from "./assets/Products";
import CreateDeal from "./admin/CreateDeal";
import Updateproduct from "./admin/Updateproduct";
import Categories from "./admin/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/About" element={<About />} />
          <Route path="/ShopDetails" element={<ShopDetails/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart/>} />
          <Route path="/CheckOut" element={<CheckOut/>} />
          <Route path="/BlogDetails" element={<BlogDetails/>} />
          <Route path="/Blog" element={<Blog/>} />
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
            <Route path="admin/Category" element={<Categories/>} />
            <Route path="admin/Createproduct" element={<CreateProduct/>} />
            <Route path="admin/Updateproduct/:slug" element={<Updateproduct/>} />
            <Route path="admin/CreateDeal" element={<CreateDeal/>} />
            <Route path="admin/Products" element={<Products/>} />
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

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
import ShoppingCart from "./assets/ShoppingCart";
import ShopDetails from "./assets/ShopDetails"
import CheckOut from "./assets/CheckOut"
import BlogDetails from "./assets/BlogDetails"
import Blog from "./assets/Blog";
import Products from "./assets/Products";
import CreateDeal from "./admin/CreateDeal";
import Profiles from "./admin/Profile";
import Updateproduct from "./admin/Updateproduct";
import Categories from "./admin/Categories";
import Deals from "./admin/Deals";
import SingleProduct from "./assets/SingleProduct";
import Search from "./assets/Search"
import Cartitems from "./assets/Cartitems";
import Heartitems from "./assets/Heartitems";
import Users from "./admin/Users";
import FAQ from "./assets/FAQ";
import Accessories from "./assets/Accessories";
import Shoes from "./assets/Shoes";
import RetunExchange from "./assets/RetunExchange";

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
          <Route path="/Search" element={<Search/>} />
          <Route path="/Cart" element={<Cartitems/>} />
          <Route path="/getsingleproduct/:id" element={<SingleProduct />} />
          <Route path="/Heart" element={<Heartitems/>} />
          <Route path="/Accessories" element={<Accessories/>} />
          <Route path="/Shoes" element={<Shoes/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/RetunExchange" element={<RetunExchange/>} />
          
          {/* {Private Routes for users} */}
          <Route path="Dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/Orders" element={<Orders />} />
            <Route path="user/profile" element={<Profile />} />
          </Route>

          {/* {Admin Routes} */}
          <Route path="Dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>} />
            <Route path="admin/Profile" element={<Profiles/>} />
            <Route path="admin/Createcategory" element={<CreateCategory/>} />
            <Route path="admin/Category" element={<Categories/>} />
            <Route path="admin/Createproduct" element={<CreateProduct/>} />
            <Route path="admin/Updateproduct/:slug" element={<Updateproduct/>} />
            <Route path="admin/CreateDeal" element={<CreateDeal/>} />
            <Route path="admin/Deals" element={<Deals/>} />
            <Route path="admin/Products" element={<Products/>} />
            <Route path="admin/Users" element={<Users/>} />
          </Route>

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;

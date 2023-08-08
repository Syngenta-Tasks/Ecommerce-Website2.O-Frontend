import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/Footer";
import HomePage from "./components/Home";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import WelcomePage from "./components/WelcomePage";
import WelcomeUser from "./components/WelcomeUser";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserPage from "./components/UserPage";
import AdminPage from "./components/AdminPage";
import CategoryForm from "./components/CategoryForm";
import SubcategoryForm from "./components/SubcategoryForm";
import UpdateCategoryForm from "./components/UpdateCategoryForm";
import DeleteCategoryForm from "./components/DeleteCategoryForm";
import ProductPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import AdminProductForm from "./components/AdminProductForm";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/welcome/:name" element={<WelcomePage />} />
          <Route path="/welcome/" element={<WelcomeUser />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<FooterComponent />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/create-category" element={<CategoryForm />} />
          <Route path="/create-subcategory" element={<SubcategoryForm />} />
          <Route path="/update-category" element={<UpdateCategoryForm />} />
          <Route path="/delete-category" element={<DeleteCategoryForm />} />
          <Route path="/admin-product" element={<AdminProductForm />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
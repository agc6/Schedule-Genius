

import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import AddProduct from "../pages/admin/AddProduct";


const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/products", component: Products },
  { path: "/admin/add-products", component: AddProduct },
];
export {adminRoutes };

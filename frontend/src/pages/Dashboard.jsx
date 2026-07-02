import { useEffect, useState } from "react";
import API from "../services/api";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";
import StatsCards from "../components/StatsCards";
import InventoryChart from "../components/InventoryChart";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await API.get("/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add Product
  const addProduct = async (product) => {
    try {
      await API.post("/", product);
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Update Product
  const updateProduct = async (id, product) => {
    try {
      await API.put(`/${id}`, product);
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Search + Category Filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Category List
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="container">
      <header className="navbar">
  <div>
    <h1>Inventory Management System</h1>
    <p>Track • Manage • Monitor Inventory Efficiently</p>
  </div>

  <div className="user-profile">
    <div className="avatar">D</div>
    <span>Admin</span>
  </div>
</header>
      <StatsCards products={products} />
      <InventoryChart products={products} />

      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        editingProduct={editingProduct}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <ProductTable
        products={filteredProducts}
        onEdit={setEditingProduct}
        onDelete={deleteProduct}
      />
      <footer className="footer">
      © 2026 Inventory Management System
      Developed by Deeksha S | MERN Stack Project
</footer>
    </div>
  );
}

export default Dashboard;
import { useEffect, useState } from "react";

function ProductForm({ addProduct, updateProduct, editingProduct }) {
  const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
    minStock: "",
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name || "",
        category: editingProduct.category || "",
        quantity: editingProduct.quantity || "",
        price: editingProduct.price || "",
        minStock: editingProduct.minStock || "",
      });
    } else {
      setFormData(initialState);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      formData.quantity === "" ||
      formData.price === "" ||
      formData.minStock === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const product = {
      name: formData.name.trim(),
      category: formData.category.trim(),
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      minStock: Number(formData.minStock),
    };

    if (editingProduct) {
      updateProduct(editingProduct._id, product);
    } else {
      addProduct(product);
    }

    setFormData(initialState);
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  return (
    <div className="form-container">
      <h2>
        {editingProduct ? "Update Product" : "Add New Product"}
      </h2>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            min="0"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Minimum Stock</label>
          <input
            type="number"
            name="minStock"
            placeholder="Enter minimum stock"
            min="0"
            value={formData.minStock}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="primary-btn">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
function ProductTable({ products, onEdit, onDelete }) {
    return (
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Total Value (₹)</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="9" className="no-data">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product, index) => {
                const lowStock = product.quantity <= product.minStock;
                const totalValue = product.quantity * product.price;
  
                return (
                  <tr
                    key={product._id}
                    className={lowStock ? "low-stock-row" : ""}
                  >
                    <td>{index + 1}</td>
  
                    <td>{product.name}</td>
  
                    <td>{product.category}</td>
  
                    <td>{product.quantity}</td>
  
                    <td>₹{Number(product.price).toFixed(2)}</td>
  
                    <td>₹{totalValue.toFixed(2)}</td>
                    <td>
  {new Date(product.createdAt).toLocaleDateString("en-IN")}
</td>
  
                    <td>
                      {lowStock ? (
                        <span className="status low-stock">
                          🔴 Low Stock
                        </span>
                      ) : (
                        <span className="status available">
                          🟢 Available
                        </span>
                      )}
                    </td>
  
                    <td>
                      <div className="action-buttons">
                        <button
                          className="edit-btn"
                          onClick={() => onEdit(product)}
                        >
                          Edit
                        </button>
  
                        <button
                          className="delete-btn"
                          onClick={() => onDelete(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ProductTable;
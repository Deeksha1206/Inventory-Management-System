function StatsCards({ products }) {
    // Total products
    const totalProducts = products.length;
  
    // Total quantity
    const totalQuantity = products.reduce(
      (sum, product) => sum + Number(product.quantity),
      0
    );
  
    // Total inventory value
    const totalInventoryValue = products.reduce(
      (sum, product) =>
        sum + Number(product.quantity) * Number(product.price),
      0
    );
  
    // Low stock products
    const lowStockProducts = products.filter(
      (product) => Number(product.quantity) <= Number(product.minStock)
    ).length;
  
    return (
      <div className="stats-container">
        <div className="stats-card">
          <h3>Total Products</h3>
          <h2>{totalProducts}</h2>
        </div>
  
        <div className="stats-card">
          <h3>Total Quantity</h3>
          <h2>{totalQuantity}</h2>
        </div>
  
        <div className="stats-card">
          <h3>Inventory Value</h3>
          <h2>
            ₹
            {totalInventoryValue.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
        </div>
  
        <div className="stats-card low-stock-card">
          <h3>Low Stock Items</h3>
          <h2>{lowStockProducts}</h2>
        </div>
      </div>
    );
  }
  
  export default StatsCards;
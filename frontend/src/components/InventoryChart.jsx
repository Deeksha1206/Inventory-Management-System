import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";
  
  function InventoryChart({ products }) {
    const categoryMap = {};
  
    products.forEach((product) => {
      if (categoryMap[product.category]) {
        categoryMap[product.category] += product.quantity;
      } else {
        categoryMap[product.category] = product.quantity;
      }
    });
  
    const data = Object.keys(categoryMap).map((category) => ({
      name: category,
      value: categoryMap[category],
    }));
  
    const COLORS = [
      "#2563eb",
      "#22c55e",
      "#f59e0b",
      "#ef4444",
      "#9333ea",
      "#14b8a6",
    ];
  
    return (
      <div
        style={{
          background: "white",
          padding: "20px",
          marginBottom: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Inventory by Category
        </h2>
  
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
  
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default InventoryChart;
# 📦 Inventory Management System

A full-stack Inventory Management System built using the MERN stack (React, Node.js, Express.js, and MongoDB Atlas). The application allows users to efficiently manage products, monitor inventory levels, and identify low-stock items through a clean and responsive dashboard.

---

## 🚀 Features

### Backend
- Add a new product
- Retrieve all products
- Update existing products
- Delete products
- View low-stock products
- MongoDB Atlas integration
- RESTful API design
- Error handling middleware

### Frontend
- Add, View, Edit and Delete products
- Search products by name
- Filter products by category
- Highlight low-stock items
- Dashboard statistics
- Inventory value calculation
- Category-wise Pie Chart
- Created At date display
- Responsive and modern UI

---

# 🛠 Tech Stack

### Frontend
- React.js
- Axios
- CSS3
- Recharts

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Development Tools
- VS Code
- Git & GitHub
- Postman

---

# 📁 Project Structure

```
Inventory-Management-System
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── dashboard.css
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/products` | Add Product |
| GET | `/api/products` | Get All Products |
| PUT | `/api/products/:id` | Update Product |
| DELETE | `/api/products/:id` | Delete Product |
| GET | `/api/products/low-stock` | Get Low Stock Products |

---

# 🗃 Product Model

Each product contains:

- id
- name
- category
- price
- quantity
- minStock
- createdAt

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Deeksha1206/Inventory-Management-System.git
```

## 2. Navigate to Project

```bash
cd Inventory-Management-System
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```
PORT=5000
MONGO_URI=mongodb+srv://deekshas1206_db_user:aEGMnyzTybslMiQn@inventory-management-sy.xiwxbxi.mongodb.net/?appName=inventory-management-system
```

Run backend

```bash
npm run dev
```

or

```bash
npm start
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
npm install
```

Run frontend

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 🎯 Functionalities

- Add Product
- Edit Product
- Delete Product
- Search Product
- Category Filter
- Low Stock Highlight
- Dashboard Statistics
- Inventory Value
- Category Pie Chart
- Created Date

---

# 📊 Dashboard Statistics

The dashboard displays:

- Total Products
- Total Quantity
- Total Inventory Value
- Low Stock Products

---

# 📈 Inventory Chart

A Pie Chart is used to visualize inventory quantity distribution across different product categories.

---

# ⚠️ Assumptions

- Product names are entered manually.
- Categories are user-defined.
- Minimum stock is specified while adding a product.
- MongoDB Atlas is used as the database.
- The application is intended for local execution.

---

# 🔮 Future Improvements

- User Authentication & Authorization
- Export Inventory to Excel/PDF
- Barcode Scanner Integration
- Product Image Upload
- Pagination
- Sorting by Price and Quantity
- Notifications for Low Stock
- Dark Mode
- Sales Report Dashboard

---

# 🧪 Error Handling

The application handles:

- Empty input validation
- Invalid API requests
- Database connection errors
- Product not found scenarios
- Server-side exceptions

---

# 📸 Screenshots

<img width="1920" height="1080" alt="Screenshot (353)" src="https://github.com/user-attachments/assets/c62fbe8f-fed7-4be4-a18d-6ad7a05e67e6" />
<br>
<img width="1920" height="1080" alt="Screenshot (354)" src="https://github.com/user-attachments/assets/e64e7501-e1bb-4c83-9ba8-6de08a4f88af" />
<br>
<img width="1920" height="1080" alt="Screenshot (355)" src="https://github.com/user-attachments/assets/61046a6b-eed6-4600-885d-25cfc6655ccf" />
<br>
<img width="1920" height="1080" alt="Screenshot (356)" src="https://github.com/user-attachments/assets/4930bfe7-6250-4eb8-8a77-2765cb314809" />







---

# 🎥 Demo Video

Link : https://drive.google.com/file/d/1-2Myb0wXXSOKOkQm3FEYozfCu03MGhly/view?usp=sharing 


---

# 👩‍💻 Developed By

**Deeksha S**

B.Tech Computer Science & Engineering

REVA University

GitHub:
https://github.com/Deeksha1206

---


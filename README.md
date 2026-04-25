# 🛒 Full Stack E-Commerce Application

A complete full-stack eCommerce platform with user authentication, product management, cart system, and multiple payment integrations including **Cash on Delivery (COD), Razorpay, and Stripe**.

🚀 Live Links

🌐 Frontend: https://ecommerce-app-frontend-ten-lyart.vercel.app/
⚙️ Backend API: https://ecommerce-app-backend-three-gamma.vercel.app/
🛠️ Admin Panel: https://ecommerce-app-admin-eight-pi.vercel.app/

---

## ✨ Features

### 👤 User Features

* 🔐 Authentication (Signup / Login)
* 🛍️ Browse Products
* 🛒 Add to Cart / Remove from Cart
* 📦 Place Orders
* 💳 Multiple Payment Options:

  * Cash on Delivery (COD)
  * Razorpay Payment Gateway
  * Stripe Payment Gateway

---

### 🛠️ Admin Panel

* ➕ Add Products
* 📋 View Product List
* ❌ Delete Products
* 📦 Manage Orders
* 📊 Track Order Status

---

## 🛠️ Tech Stack

### 💻 Frontend

* React.js (Vite)
* React Router DOM
* Axios
* Tailwind CSS
* Context API (State Management)

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (Image Upload)
* Cloudinary (Image Storage)

### 💳 Payment Integration

* Razorpay
* Stripe
* Cash on Delivery (COD)

### ☁️ Deployment

* Vercel (Frontend)
* Render / Vercel (Backend)

---

## 📁 Project Structure

```bash
Ecommerce-App/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── .env.backend.example
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── .env.frontend.example
│   └── package.json
│
├── admin/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   ├── .env.admin.example
│   └── package.json
│
└── README.md
```

---

## 🔐 Environment Variables

### Backend `.env.backend.example`

```env
PORT=5000
MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

STRIPE_SECRET_KEY=your_stripe_secret
```

---

### Frontend `.env.frontend.example`

```env
VITE_BACKEND_URL=your_backend_url
VITE_RAZORPAY_KEY=your_razorpay_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

### Admin `.env.admin.example`

```env
VITE_BACKEND_URL=your_backend_url
```

---

⚠️ Never commit your actual `.env` files.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Iam-Balaram/Ecommerce-App
cd Ecommerce-App
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 4️⃣ Setup Admin Panel

```bash
cd admin
npm install
npm run dev
```

---

## 💳 Payment Flow

### 🧾 Cash on Delivery (COD)

* User places order without online payment
* Order is marked as **pending payment**

### 💰 Razorpay

* Order created in backend
* Payment verified using Razorpay API
* Order marked as **paid**

### 💳 Stripe

* Stripe checkout session created
* Payment processed securely
* Order updated after successful payment

---

## 🔄 API Endpoints

### 🧑 User Routes

```bash
POST   /api/v1/user/register      # Register new user
POST   /api/v1/user/login         # Login user
POST   /api/v1/user/admin         # Admin login
```

---

### 🛍️ Product Routes

```bash
GET    /api/v1/product/list       # Get all products
POST   /api/v1/product/single     # Get single product
POST   /api/v1/product/add        # Add product (Admin only)
POST   /api/v1/product/remove     # Remove product (Admin only)
```

---

### 🛒 Cart Routes

```bash
POST   /api/v1/cart/get           # Get user cart
POST   /api/v1/cart/add           # Add item to cart
POST   /api/v1/cart/update        # Update cart items
```

---

### 📦 Order & Payment Routes

```bash
POST   /api/v1/order/place        # Place order (COD)
POST   /api/v1/order/stripe       # Place order via Stripe
POST   /api/v1/order/razorpay     # Place order via Razorpay

POST   /api/v1/order/verifystripe   # Verify Stripe payment
POST   /api/v1/order/verifyrazorpay # Verify Razorpay payment

POST   /api/v1/order/userorders   # Get user orders

POST   /api/v1/order/list         # Get all orders (Admin)
POST   /api/v1/order/status       # Update order status (Admin)
```

---

### 🧪 Health Check

```bash
GET /                         # API is working
```


## 🧠 Key Concepts Implemented

* JWT Authentication & Protected Routes
* REST API Design
* Payment Gateway Integration (Razorpay + Stripe)
* File Upload using Multer + Cloudinary
* Role-based Access (Admin/User)
* Full-stack state management

---

## 🎯 Future Improvements

* 🔍 Product Search & Filters
* ⭐ Product Reviews & Ratings
* 📱 Mobile Responsiveness
* 🔔 Order Notifications
* 🧾 Invoice Generation

---

## 👨‍💻 Author

**Balaram Mukhi**

* GitHub: https://github.com/Iam-Balaram
* LinkedIn: https://linkedin.com/in/balaram-mukhi/

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

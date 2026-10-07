# Full-Stack E-Commerce Web Application

A full-stack e-commerce platform built with the MERN stack, featuring a customer-facing storefront, admin dashboard, product management, shopping cart, order management, authentication, image uploads, and online payment integration.

## 🚀 Live Demo

### Customer Store

https://e-commerce-frontend-omega-ruddy.vercel.app/

### Admin Dashboard

https://e-commerce-admin-flame-zeta.vercel.app/

### Backend API

https://e-commerce-backend-mauve-seven.vercel.app/

---

## 📸 Features

### 👤 User Features

- User registration and login
- JWT-based authentication
- Secure password hashing with bcrypt
- Product browsing
- Product details
- Category and sub-category filtering
- Product size selection
- Shopping cart
- Cart quantity management
- Order placement
- Order history
- Responsive user interface

### 🛒 Shopping & Orders

- Add products to cart
- Update product quantities
- Remove products from cart
- Checkout
- Cash on Delivery
- Stripe payment integration
- Razorpay payment integration
- Payment verification
- Order tracking
- Order status management

### 👨‍💼 Admin Features

- Admin authentication
- Product management
- Add products
- Upload multiple product images
- Remove products
- View all orders
- Update order status
- Dedicated admin dashboard

### ☁️ Cloud Services

- MongoDB Atlas for database
- Cloudinary for product image storage
- Vercel for deployment

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- React Router
- Axios
- CSS
- Responsive Design

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- REST APIs

### Integrations

- Cloudinary
- Stripe
- Razorpay

### Deployment

- Vercel
- MongoDB Atlas
- Cloudinary

---

## 🏗️ Project Architecture

```text
e-commerce-app/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/
    ├── config/
    │   ├── mongodb.js
    │   └── cloudinary.js
    │
    ├── controllers/
    │   ├── cartController.js
    │   ├── orderController.js
    │   ├── productController.js
    │   └── userController.js
    │
    ├── middleware/
    │   ├── auth.js
    │   ├── adminAuth.js
    │   └── multer.js
    │
    ├── models/
    │   ├── orderModel.js
    │   ├── productModel.js
    │   └── userModel.js
    │
    ├── routes/
    │   ├── cartRoute.js
    │   ├── orderRoute.js
    │   ├── productRoute.js
    │   └── userRoute.js
    │
    ├── server.js
    └── package.json
```

---

## 🔐 Authentication

The application uses JWT-based authentication.

### User Authentication

- Registration
- Login
- Password hashing with bcrypt
- JWT token generation
- Protected user routes

### Admin Authentication

- Dedicated admin login
- JWT-based authorization
- Protected admin routes
- Product and order management permissions

---

## 🗄️ Database

MongoDB is used as the primary database with Mongoose for data modeling and database operations.

### Main Collections

#### Users

Stores:

- Name
- Email
- Password
- Cart data

#### Products

Stores:

- Product name
- Description
- Price
- Images
- Category
- Sub-category
- Available sizes
- Bestseller status
- Creation date

#### Orders

Stores:

- User
- Ordered products
- Amount
- Delivery address
- Payment method
- Payment status
- Order status
- Order date

---

## 💳 Payment Integration

The application supports multiple payment methods:

### Cash on Delivery

Orders can be placed without online payment.

### Stripe

Stripe Checkout is integrated for online payments.

### Razorpay

Razorpay is integrated for online payments and payment verification.

---

## 🖼️ Image Management

Product images are uploaded through Multer and stored using Cloudinary.

The backend supports multiple product images:

```text
image1
image2
image3
image4
```

This keeps product image storage separate from the application server.

---

## 🔌 API Structure

### User APIs

```text
POST /api/user/register
POST /api/user/login
POST /api/user/admin
```

### Product APIs

```text
GET  /api/product/list
POST /api/product/single
POST /api/product/add
POST /api/product/remove
```

### Cart APIs

```text
POST /api/cart/get
POST /api/cart/add
POST /api/cart/update
```

### Order APIs

```text
POST /api/order/place
POST /api/order/stripe
POST /api/order/razorpay
POST /api/order/userorders
POST /api/order/verifyStripe
POST /api/order/verifyRazorpay

POST /api/order/list
POST /api/order/status
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` directory.

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Never commit `.env` files or secret credentials to GitHub.

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Start the backend

```bash
npm run server
```

The backend runs on:

```text
http://localhost:4000
```

### 4. Install frontend dependencies

```bash
cd frontend
npm install
```

### 5. Start the frontend

```bash
npm run dev
```

### 6. Install admin dependencies

```bash
cd admin
npm install
```

### 7. Start the admin dashboard

```bash
npm run dev
```

---

## 🔒 Security

The project implements several security mechanisms:

- JWT authentication
- bcrypt password hashing
- Protected user routes
- Protected admin routes
- Environment variables for secrets
- Payment verification
- Authentication middleware
- Admin authorization middleware

---

## 📱 Responsive Design

The customer-facing application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 📈 Future Improvements

Potential improvements include:

- Product search
- Pagination
- Product reviews and ratings
- Wishlist functionality
- Coupon and discount system
- Advanced admin analytics
- Inventory management
- Email notifications
- Improved payment webhook handling
- Role-based admin permissions
- Order cancellation and refund management

---

## 🎯 What I Learned

Through this project, I gained practical experience with:

- Building a complete MERN stack application
- Designing REST APIs
- MongoDB and Mongoose
- JWT authentication
- Password hashing
- Middleware and authorization
- Shopping cart architecture
- Order management
- Payment gateway integration
- Cloudinary image management
- Admin dashboard development
- Environment variable management
- Full-stack deployment

---

## 👨‍💻 Author

**Suchit Mishra**

B.Tech Computer Science Student

### Technologies

`React` `JavaScript` `Node.js` `Express.js` `MongoDB` `Mongoose` `JWT` `Stripe` `Razorpay` `Cloudinary` `Vercel`

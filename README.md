# 🛋️ Hi-Decor

A full-stack MERN-based e-commerce platform for furniture and home décor
products. The application provides a seamless shopping experience for
customers, a dedicated admin dashboard for product management, secure
user authentication, and online payment integration.

**Live Website:** https://msr23cs8059-ux.github.io/Hi-Decor/

> Note: The frontend is deployed using GitHub Pages. Some dynamic features may require the backend server to be running.

## 🚀 Features

### User Features

-   User Registration & Login (JWT Authentication)
-   Browse, search and filter products
-   Shopping Cart
-   Place Orders
-   Stripe Payment Gateway
-   Cash on Delivery (COD)
-   Order History
-   Responsive UI

### Admin Features

-   Secure Admin Login
-   Add/Delete Products
-   Upload Product Images
-   View & Update Orders

### Backend Features

-   RESTful APIs
-   JWT Authentication
-   Cloudinary Image Upload
-   MongoDB Atlas
-   Stripe Integration

## 🏗️ Tech Stack

**Frontend:** React.js, Vite, Tailwind CSS, Axios, React Router

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt,
Multer, Cloudinary, Stripe

**Admin:** React.js, Vite, Tailwind CSS

## 📂 Project Structure

``` text
Hi-Decor/
├── README.md
├── .gitignore
├── admin/
├── backend/
└── frontend/
```

## 🔑 Environment Variables

Create `backend/.env`:

``` env
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

> Never commit your `.env` file.

## ▶️ Installation

``` bash
git clone https://github.com/msr23cs8059-ux/Hi-Decor.git
cd Hi-Decor
```

Install dependencies:

``` bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

Run:

``` bash
cd backend && npm start
cd ../frontend && npm run dev
cd ../admin && npm run dev
```

## 🌟 Future Improvements

-   Wishlist
-   Product Reviews
-   Coupons
-   Email Notifications
-   Analytics Dashboard

## 👨‍💻 Author

GitHub: https://github.com/msr23cs8059-ux

If you like this project, consider giving it a ⭐ on GitHub.

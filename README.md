# Inventory Management System

A full-stack Inventory Management System developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application provides an intuitive interface for managing inventory by allowing users to create, view, update, and delete product records.

The project demonstrates modern full-stack web development practices including REST API development, cloud database integration, frontend-backend communication, and cloud deployment.

---

# Table of Contents

* Overview
* Live Application
* Features
* Technology Stack
* System Architecture
* Project Structure
* REST API
* Installation
* Environment Variables
* Deployment
* Screenshots
* Future Improvements
* Learning Outcomes
* Author

---

# Overview

The Inventory Management System is designed to simplify inventory management through a web-based application. Users can perform complete CRUD operations while data is securely stored in MongoDB Atlas.

The project follows a client-server architecture where the React frontend communicates with an Express REST API, which interacts with MongoDB using Mongoose.

---

# Live Application

## Frontend

https://inventory-management-system-six-sigma.vercel.app/

## Backend API

https://inventory-management-system-enid.onrender.com/products

---

# Features

* Product Management

  * Add Products
  * View Products
  * Update Products
  * Delete Products

* RESTful API

* MongoDB Atlas Cloud Database

* Responsive User Interface

* Client-Server Architecture

* Cloud Deployment

---

# Technology Stack

| Category         | Technology          |
| ---------------- | ------------------- |
| Frontend         | React.js            |
| Styling          | Bootstrap, CSS3     |
| Backend          | Node.js, Express.js |
| Database         | MongoDB Atlas       |
| ODM              | Mongoose            |
| Version Control  | Git, GitHub         |
| Backend Hosting  | Render              |
| Frontend Hosting | Vercel              |

---

# System Architecture

```text
                    React Frontend
                           │
                           │
                    Fetch API Requests
                           │
                           ▼
                  Express REST API
                           │
                           ▼
                     Mongoose ODM
                           │
                           ▼
                  MongoDB Atlas Database
```

---

# Request Flow

```text
User

↓

React Component

↓

Fetch API

↓

Express Route

↓

Controller Logic

↓

MongoDB Atlas

↓

JSON Response

↓

React UI Update
```

---

# Project Structure

```text
Inventory-Management-System
│
├── Backend
│   ├── Models
│   │      Products.js
│   │
│   ├── Routes
│   │      router.js
│   │
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend
│   └── inventory_management_system
│          ├── public
│          ├── src
│          │    ├── components
│          │    ├── App.js
│          │    └── index.js
│          │
│          ├── package.json
│          └── package-lock.json
│
└── README.md
```

---

# REST API

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/products`          | Get all products  |
| GET    | `/products/:id`      | Get product by ID |
| POST   | `/insertproduct`     | Add new product   |
| PUT    | `/updateproduct/:id` | Update product    |
| DELETE | `/deleteproduct/:id` | Delete product    |

---

# Local Installation

## Clone Repository

```bash
git clone https://github.com/santosh1024/inventory-management-system.git
```

---

## Backend

```bash
cd Backend
npm install
npm run server
```

---

## Frontend

```bash
cd Frontend/inventory_management_system
npm install
npm start
```

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:3001
```

---

# Environment Variables

Create a `.env` file inside the Backend folder.

```env
MONGO_URI=your_mongodb_connection_string
```

---

# Deployment

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

# Screenshots

Create a folder named:

```
screenshots
```

Add images such as:

```
screenshots/

home.png

products.png

add-product.png

update-product.png
```

Then include them like:

```markdown
## Home

![Home](screenshots/home.png)
```

---

# Future Improvements

* User Authentication (JWT)

* Product Categories

* Product Images

* Dashboard Analytics

* Search Products

* Pagination

* Inventory Reports

* Barcode Scanner

* Export to Excel

* Export to PDF

* Dark Mode

---

# Learning Outcomes

This project demonstrates practical experience with:

* MERN Stack Development

* REST API Design

* MongoDB Atlas Integration

* CRUD Operations

* Cloud Deployment

* Git & GitHub

* React Hooks

* Express Routing

* Mongoose ODM

* Frontend-Backend Integration

---

# Author

**Santosh Rawat**

GitHub

https://github.com/santosh1024

---

# License

This project is developed for educational, learning, and portfolio purposes.

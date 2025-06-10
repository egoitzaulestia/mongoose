# MongoDB Products API

A RESTful API for product management built with Node.js, Express, and MongoDB Atlas.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Objectives](#project-objectives)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## 🌟 Overview

This project demonstrates the implementation of a RESTful API for managing products using a non-relational database approach. Instead of traditional tables and rows found in relational databases, MongoDB's architecture consists of collections and documents, storing data in JSON-like documents that can vary in structure.

## 🎯 Project Objectives

The main goals of this project are to:

- **Understand non-relational databases**: Learn what NoSQL databases are and how they differ from traditional SQL databases
- **Master NoSQL queries**: Understand how to perform queries on non-relational databases
- **Design and analyze databases**: Create effective database schemas with corresponding collections
- **Data interaction**: Learn how to interact with data stored in the database through CRUD operations

## ✨ Features

- **Full CRUD Operations**: Create, Read, Update, and Delete products
- **MongoDB Atlas Integration**: Cloud-based database connection
- **RESTful Architecture**: Clean and intuitive API endpoints
- **Modular Design**: Organized code structure with separate controllers
- **JSON Document Storage**: Flexible data structure using MongoDB's document model

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB Atlas Account](https://www.mongodb.com/atlas) (free tier available)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/egoitzaulestia/mongoose.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Atlas database connection**

   Use `keys.example.js` file in the config directory:

   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

## ⚙️ Configuration

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Set up database access (username and password)
4. Configure network access (add your IP address)

### Database Connection

The application establishes a secure connection to MongoDB Atlas, allowing interaction with the cloud-based database.

## 🛠️ API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/products`        | Get all products       |
| GET    | `/products/id/:id` | Get a specific product |
| POST   | `/products`        | Create a new product   |
| PUT    | `/products/id/:id` | Update a product       |
| DELETE | `/products/id/:id` | Delete a product       |

## 📝 Usage Examples

### Create a Product

```bash
POST /products
Body: raw/json (in Postman)

{
  "name": "Laptop",
  "price": 999.99,
}
```

### Get All Products

```bash
GET /products
```

### Update a Product

```bash
PUT /products/id/60d5ec49f1b2c8b1f8c8e8e8
Body: raw/json (in Postman)

{
  "name": "Gaming Laptop",
  "price": 1299.99
}
```

### Delete a Product

```bash
DELETE /products/id/60d5ec49f1b2c8b1f8c8e8e8
```

## 📁 Project Structure

```
mongoose/
├── controllers/
│   └── ProductController.js
├── models/
│   └── Product.js
├── routes/
│   └── products.js
├── config/
│   └── config.js
│   └── keys.example.js
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL document database
- **MongoDB Atlas**: Cloud database service
- **Mongoose**: MongoDB object modeling for Node.js

## 🚀 Getting Started

1. **Start the development server**

   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

2. **The server will be running at**

   ```
   http://localhost:3000
   ```

3. **Test the API endpoints using tools like:**
   - [Postman](https://www.postman.com/)
   - Your preferred API testing tool

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📚 Learning Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [RESTful API Design](https://restfulapi.net/)

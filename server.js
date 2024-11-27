// Import express
const express = require("express");

// Import cors
const cors = require("cors");

// Import Router
const productRoutesvariable = require("./routes/productRoutes");
const userRouter = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

// Create an instance of express
const app = express();
app.use(express.json());

// Use cors
app.use(cors({
    origin: "https://www.google.com/",  // เว็บที่เราอนุญาตให้เข้าถึง API ถ้าจะให้ทุกที่เข้าถึง ให้ใช้ orgin: "*"
    methods: ["GET", "POST", "PUT", "DELETE"] // กำหนด Methods ที่อนุญาต
}));

// Create a port
const port = 3000;

// Use Router
app.use("/api/products", productRoutesvariable);
app.use("/api/users", userRouter);
app.use("/api/product", productRoute);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
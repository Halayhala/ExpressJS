const express = require("express");
const router = express.Router();

// Import db
const db = require("../utils/db");
// Create a route
router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/about", (req, res) => {
    res.send("About Page");
});

router.get("/product", (req, res) => {
    res.send("Read Product Page");
});

router.post("/product", (req, res) => {
    res.send("Add Product Page");
});

router.put("/product", (req, res) => {
    res.send("Edit Product Page");    
});

router.delete("/product", (req, res) => {
    res.send("Delete Product Page");
}); 

// ทดสอบการเชื่อมต่อ DB
router.get("/testdb", async (req, res) => {
    try {
        const client = await db.connect();
        const result = await db.query("SELECT * FROM Public.user");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;
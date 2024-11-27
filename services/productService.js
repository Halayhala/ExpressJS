const db = require("../utils/db");
const Product = require("../models/productModel");

// สร้างฟังก์ชันในการอ่านข้อมูลสินค้าทั้งหมดออกมา
const getAllProduct = async () => {
    const client = await db.connect(); // เชื่อมต่อกับฐานข้อมูล
    const result = await db.query("SELECT * FROM public.product");
    client.release(); // ปิดการเชื่อมต่อกับฐานข้อมูล
    return result.rows.map(row => new Product(
        row.id, 
        row.name, 
        row.price, 
        row.qty, 
        row.createdate    
    ));
}

//ฟังก์ชันสำหรับอ่านข้อมูลสินค้าตาม id
const getProductById = async (id) => {
    const client = await db.connect(); // เชื่อมต่อกับฐานข้อมูล
    const result = await client.query("SELECT * FROM public.product WHERE id = $1", [id]);
    client.release(); // ปิดการเชื่อมต่อกับฐานข้อมูล
    return result.rows.map(row => new Product(
        row.id, 
        row.name, 
        row.price, 
        row.qty, 
        row.createdate    
    ));
}

// สร้างฟังก์ชันสำหรับการเพิ่มข้อมูลสินค้า
const addProduct = async (name, price, qty) => {
    const client = await db.connect(); // เชื่อมต่อกับฐานข้อมูล
    const result = await client.query("INSERT INTO public.product (name, price, qty) VALUES ($1, $2, $3) RETURNING *", [name, price, qty]);
    client.release(); // ปิดการเชื่อมต่อกับฐานข้อมูล  
    return new Product(
        result.rows[0].id, 
        result.rows[0].name, 
        result.rows[0].price, 
        result.rows[0].qty, 
        result.rows[0].createdate    
    );
}

// ฟังก์ชันสำหรับการแก้ไขข้อมูลสินค้า
const updateProduct = async (id, name, price, qty) => {
    const client = await db.connect(); // เชื่อมต่อกับฐานข้อมูล
    const result = await client.query("UPDATE public.product SET name = $1, price = $2, qty = $3 WHERE id = $4 RETURNING *", [name, price, qty, id]);
    client.release(); // ปิดการเชื่อมต่อกับฐานข้อมูล
    return new Product(
        result.rows[0].id, 
        result.rows[0].name, 
        result.rows[0].price, 
        result.rows[0].qty, 
        result.rows[0].createdate    
    );
}

// ฟังก์ชันสำหรับลบข้อมูลสินค้า
const deleteProduct = async (id) => {
    const client = await db.connect(); // เชื่อมต่อกับฐานข้อมูล
    const result = await client.query("DELETE FROM public.product WHERE id = $1 RETURNING *", [id]);    
    client.release(); // ปิดการเชื่อมต่อกับฐานข้อมูล

    return new Product(
        result.rows[0].id, 
        result.rows[0].name, 
        result.rows[0].price, 
        result.rows[0].qty, 
        result.rows[0].createdate    
    );
}


module.exports = {
    getAllProduct,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}
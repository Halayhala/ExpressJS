const db = require("../utils/db");
const User = require("../models/userModel");

// สร้างฟังก์ชันในการอ่านข้อมูลผู้ใช้ทั้งหมดออกมา
const getAllUsers = async () => {
    const client = await db.connect(); // เชื่อมต่อกับฐานข้อมูล
    const result = await db.query("SELECT * FROM public.user order by id desc");
    client.release(); // ปิดการเชื่อมต่อกับฐานข้อมูล
    return result.rows.map(row => new User(
        row.id, 
        row.firstname, 
        row.lastname, 
        row.email, 
        row.phone
    ));
}

module.exports = {
    getAllUsers
}
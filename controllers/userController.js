// controllers/userController.js

const userService = require("../services/userService");

// สร้างฟังก์ชันสำหรับอ่านข้อมูลผู้ใช้งานทั้งหมด

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers(); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด
        res.status(200).json(users); // ส่งค่าผู้ใช้งานทั้งหมดกลับไปยัง client
    } catch (error) {
        next(error);   // ส่งค่าเกิดข้อผิดพลาดกลับไปยัง client    
    }
};  

const getAllProduct = async (req, res) => {
    try {
        const product = await userService.getAllProduct(); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด
        res.status(200).json(product); // ส่งค่าผู้ใช้งานทั้งหมดกลับไปยัง client
    } catch (error) {
        next(error);   // ส่งค่าเกิดข้อผิดพลาดกลับไปยัง client    
    }
};  

module.exports = {
    getAllUsers
};  
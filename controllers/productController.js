const productService = require("../services/productService");

const getAllProduct = async (req, res, next) => {
    try {
        const product = await productService.getAllProduct(); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด
        res.status(200).json(product); // ส่งค่าผู้ใช้งานทั้งหมดกลับไปยัง client
    } catch (error) {
        next(error);   // ส่งค่าเกิดข้อผิดพลาดกลับไปยัง client    
    }
};  

const getProductById = async (req, res,next) => {
    try {
        const product = await productService.getProductById(req.params.id); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด
        res.status(200).json(product); // ส่งค่าผู้ใช้งานทั้งหมดกลับไปยัง client
    } catch (error) {
        next(error);   // ส่งค่าเกิดข้อผิดพลาดกลับไปยัง client    
    }
};  

//ฟังก์ชันสำหรับการเพิ่มข้อมูลสินค้า
const addProduct = async (req, res, next) => {

    //รับค่าจากผู้ใช้
    const {name, price, qty} = req.body;

    try {
        const product = await productService.addProduct(name, price, qty); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด
        res.status(200).json(product); // ส่งค่าผู้ใช้งานทั้งหมดกลับไปยัง client
    } catch (error) {
        next(error);   // ส่งค่าเกิดข้อผิดพลาดกลับไปยัง client
    }
    }

// ฟังก์ชันสำหรับการแก้ไขข้อมูลสินค้า
const updateProduct = async (req, res, next) => {
    const {id, name, price, qty} = req.body;    
    try {
        const product = await productService.updateProduct(id, name, price, qty); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด  
        res.status(200).json(product); // ส่งค่าผู้ใช้งานทั้งหมดกลับไปยัง client
    } catch (error) {
        next(error);   // ส่งค่าเกิดข้อผิดพลาดกลับไปยัง client
    }
    }

// ฟังชันสำหรับการลบข้อมูลสินค้า
const deleteProduct = async (req, res, next) => {
    try {
        const product = await productService.deleteProduct(req.params.id); // เรียกใช้ฟังก์ชันอ่านข้อมูลผู้ใช้งานทั้งหมด
        res.status(200).json(product)
    }catch (error){
        next(error)
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};  
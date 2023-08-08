const express = require("express");
const router = express.Router();
const db = require('../config/database/mysql');
// const controller = require("../controller/index");

// router.get('/', controller.product.getAll);

router.get("/", (req, res, next) => {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: "Get methode product",
            data: result
        })
    })
})

router.post("/", (req, res, next) => {

    const kode = req.body.kode;
    const nama = req.body.nama;
    const warna = req.body.warna;
    var sql = "INSERT INTO product (kode, nama, warna) VALUES ('"+kode+"', '"+nama+"', '"+warna+"')";


    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: "Succes to add data warehouse"
        })
    })
})

router.get("/:kode", (req, res, next) => {
    const productKode = req.params.kode;

    const sql = "SELECT * FROM product WHERE kode="+productKode;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: "Product founded",
            data: result
        })
    })
})

router.put("/", (req, res, next) => {


    const kode = req.body.kode;
    const nama = req.body.nama;
    const warna = req.body.warna;
    var sql = "UPDATE product SET nama = '"+nama+"', warna = '"+warna+"' WHERE kode="+kode;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: "Succes to change data product"
        })
    })
})

router.delete("/:kode", (req, res, next) => {

    const kode = req.params.kode;
    var sql = "DELETE FROM product WHERE kode="+kode;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: "Succes to delete data product"
        })
    })
})

module.exports = router;
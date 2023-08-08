const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRoutes = require("./routes/product");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use("/product", userRoutes );

app.use((req, res, next) => {
    const error = new Error("Tidak Ditemukan")
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;
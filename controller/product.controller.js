const model = require('../config/model/index');
const controller = {};

controller.getAll = async function(req, res) {
    try {
        await model.product.findAll()
        .then ((result) => {
            if (result.length > 0) {
                req.status(200).json({
                    message: 'Get Methode product',
                    data: result
                })
            }else{
                res.status(200).json({
                    message: 'Tidak ada Data product',
                    data:[]
                })
            }
        })
    } catch {
        res.status(404).json({
            message: error
        })
    }
};

module.exports = controller;
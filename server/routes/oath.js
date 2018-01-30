const express = require('express');
const router = express.Router();
const generateOath = require('../services/oath-genarator');
const gnerateCanvas = require('../services/image-service/generate-canvas');
router.get('/', function (req, res, next) {
    let oath;
    if (req.query.oath) {
        oath = req.query.oath;
    } else {
        oath = generateOath(req.query.type);
    }
    const buffer = gnerateCanvas(oath).toBuffer();
    res.set('Content-Type', 'image/png');
    res.send(buffer);
});

router.get('/asText', function (req, res, next) {
    res.send(generateOath(req.query.type));
});
module.exports = router;

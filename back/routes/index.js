var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 router.post('/product', async (req, res) => {
  console.log(req.body)
  const product = new Product(req.body);
  await product.save();
  res.json({ ok: true });
});

module.exports = router;

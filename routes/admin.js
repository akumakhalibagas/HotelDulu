const path = require('path')
const fs = require('fs')
const express = require('express')

// const { addProduct } = require('../models/index')
const Product = require('../models/product')

const router = express.Router()


router.get('/add-product', (req, res) => {
  res.render(path.join('pages', 'admin', 'add-product.ejs'), {
    pageTitle: 'Add Hotel',
    path: '/admin/add-product'
  })
})

router.post('/add-product', (req, res) => {
  const { name, lokasi, image, harga } = req.body
  const newProduct = new Product(name, lokasi, image, harga)
  newProduct.save()
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
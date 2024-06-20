const express = require(`express`)
const jwt = require('jsonwebtoken');
const Route = express.Router()

const FactoryController = require('../controllers/FactoryControllers/FactoryController')
const ProductController = require('../controllers/ProductsControllers/ProductController')
const AuthMiddleware = require('../middleware/AuthMiddleware')

Route.get(`/`, async (req, res) => { 
    res.status(200).send('Hello World!')
})

Route.get(`/getkey`, async (req, res) => { 
    res.status(200).send(jwt.sign({ role: 'admin' }, process.env.SECRET_KEY, { expiresIn: '1d' }))
})


// POST ROUTERS

    // FACTORY ROUTERS
        Route.post('/create/factory', AuthMiddleware.authenticateJWT, FactoryController.Create)
    // PRODUCT ROUTERS
        Route.post('/create/product', AuthMiddleware.authenticateJWT, ProductController.Create)

// DELETE ROUTERS

    // FACTORY ROUTERS        
    // PRODUCT ROUTERS
        Route.delete('/delete/product/:id', AuthMiddleware.authenticateJWT, ProductController.Delete)

// FINDERS ROUTERS

    // FACTORY ROUTERS
    // PRODUCT ROUTERS        
        Route.get('/find/productsbyfactory', ProductController.findAllProductsByFactoryId)

// PUT ROUTERS




module.exports = Route
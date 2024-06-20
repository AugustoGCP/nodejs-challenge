const CreateProduct = require('./CreateProduct')
const DeleteProduct = require('./DeleteProduct')
const FindProduct = require('./FindProduct')

module.exports = {

    Create: CreateProduct.Create,
    Delete: DeleteProduct.Delete,
    findAllProductsByFactoryId: FindProduct.Find

}
const Prisma = require('../../../database/index')

module.exports = {

    async Create (req, res){
        return await Prisma.product.create({
            data: {
                price: req.body.price, 
                quantity: req.body.quantity, 
                factoryId: req.body.factory, 
                description: req.body.description
            }
        }).then((result)=>{
            return res.status(200).send({
                msg:'Register made with success!', 
                id:result.id,
                name:result.name,
                status:true                
            })
        }).catch((error)=>{
            console.log(error)
            return res.status(500).send({
                msg: 'Happend an error. Error: '+error,
                status: false
            })
        })
    }
}
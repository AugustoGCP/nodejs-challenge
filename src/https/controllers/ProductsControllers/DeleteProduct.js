const Prisma = require('../../../database/index')

module.exports = {

    async Delete(req, res){

        await Prisma.product.delete({
            where: {
                id: req.params.id,
            },
        }).then((result)=>{
            return res.status(200).send({
                msg:'Delete made with success!', 
                id:result.id,
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


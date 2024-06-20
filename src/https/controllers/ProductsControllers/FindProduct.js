const Prisma = require('../../../database/index')

module.exports = {

    async Find(req, res){
        
        return await Prisma.factory.findMany({
            select:{
                name:true,
                product:true
            }
        }).then((result)=>{
            // console.log(result)
            return res.status(200).json({result:result})
        }).catch((error)=>{
            console.log(error)
            return res.status(500).send({
                msg: 'Happend an error. Error: '+error,
                statusReq: false
            })
        })
    }

}
module.exports = {

    VerifyFieldFactory(string){

        if(typeof(string))
            return true
        else    
            return false

    },

    VerifyFieldFactory(obj){

        const object = {}

        switch (obj) {
            case obj.description:
                typeof(obj.description) == 'string'  ? addPropety object["description"] = true : object["description"] = false 
                break;
            case obj.factory:
                typeof(obj.factory) == 'number'  ? object["factory"] = true : object["factory"] = false
                break;
            case obj.quantity:
                typeof(obj.quantity) == 'number'  ? object["quantity"] = true : object["quantity"] = false
                break;
            case obj.price:
                Number.isInteger(obj.price) ? object["price"] = true : object["price"] = false
                break;
            // ...
            default:
                return object;
        }

        return object

    }

}
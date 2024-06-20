const jwt = require('jsonwebtoken');

module.exports = {

    async authenticateJWT (req, res, next){
        const authHeader = req.headers.authorization;
    
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
    
            if (token === process.env.TOKEN) {
                jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                    if (err) {
                        return res.status(403).send('Forbidden'); 
                    }
    
                    req.user = user;
                    next();
                });
            } else {
                res.status(401).send('Unauthorized'); 
            }
        } else {
            res.status(401).send('Unauthorized'); 
        }
    }

}
const jwt = require('jsonwebtoken');
const secretkey = process.env.SECRET_KEY;
exports.token=(datas)=>{
    return token =jwt.sign(datas,secretkey,{expiresIn:'1h'});
}

exports.verifytoken =(req,res,next)=>{
    const token=req.headers['authorization']?.split('')[1];
    if(!token) return res.status(403).send('Token is resquired')
        try{
    const decoded=jwt.verify(token,secretkey)
        req.Users=decoded;
next()
}catch(err){
    res.status(401).send('Invalid or expired token')
}
}
import jwt from 'jsonwebtoken';

const verifyToken = (req) => {

    const token = req.headers.get('token');

    console.log(`|${token}|`)
    if (!token)
        return {status : 401, message : "Access denied"};

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return  {status : 403, message : "Invalid token"};
        }
    );
    return {status : 200, message : "Done"};
};

export default verifyToken;




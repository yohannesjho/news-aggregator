const jwt = require('jsonwebtoken')
const authenticateToken = (req, res, next)=>{
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    console.log(token)

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            // If token verification fails, return a 401 (Unauthorized) error
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }

        // If token is valid, add the decoded user data to the request object
        req.user = decoded;  
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = authenticateToken;
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const pool = require('./db')
const signup = async (fields) => {

    const { userName, email, password } = fields
    try {

        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email])

        if (userCheck.rows.length > 0) {
            throw { status: 400, message: "email already in use" }
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await pool.query('INSERT INTO users (userName,email,password) VALUES ($1,$2,$3)', [userName, email, hashedPassword])

        return newUser
    } catch (error) {

        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const signin = async (fields) => {
   
    const {email,password} = fields;
    try {
         
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email])
         
         
        if (!user) { return res.status(400).json({ message: "invalid credentials" }) }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user.rows[0].id, email: user.rows[0].email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        

        return token;
       
    } catch (error) {
        
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

module.exports = { signup, signin }
const bcrypt = require('bcrypt')
const pool = require('./db')
const signup = async (fields)=>{
    
    const {userName, email, password} = fields
    try {
         
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email])

        if (userCheck.rows.length > 0) {
            throw  { status:400, message: "email already in use" }
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await pool.query('INSERT INTO users (userName,email,password) VALUES ($1,$2,$3)', [userName, email, hashedPassword])

       return newUser
    } catch (error) {
         
        throw { status:error?.status || 500, message: error?.message || error };
    }
}

module.exports = {signup}
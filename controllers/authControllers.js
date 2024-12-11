const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../db/db')

const signup = async (req,res) => {
    
    try {
        const { userName, email, password } = req.body
        if (!userName, !email, !password) return res.status(406).json({message:'all fields are required'})
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email])
       
        if (userCheck.rows.length > 0) return res.status(400).json({ message: "email already in use" })

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await pool.query('INSERT INTO users (userName,email,password) VALUES ($1,$2,$3)', [userName, email, hashedPassword])
        console.log(newUser)

        res.status(201).json({
            message: 'User created successfully',
            
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const signin = async (req,res)=>{
    try {
        const {email,password} = req.body
        console.log(req.body)
        const user = await pool.query('SELECT * FROM users WHERE email = $1',[email])
        console.log(user.rows[0])
        if(!user) return res.status(400).json({message:"invalid credentials"})
        
            const validPassword = await bcrypt.compare(password, user.rows[0].password);
            console.log(validPassword)
            if (!validPassword) {
              return res.status(400).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign(
                { id: user.rows[0].id, email: user.rows[0].email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
              );
              res.status(200).json({
                message: 'Login successful',
                token,
              });          
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { signup, signin };
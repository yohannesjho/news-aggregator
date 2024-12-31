const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../database/db')
const authService = require('../services/authService')

const signup = async (req, res) => {

    const fields = req.body
    console.log(fields)

    if (!fields.userName || !fields.email || !fields.password) {
        return res.status(404).send({ message: "all feilds  shuch as userName, email and password should  be filled" })
    }

    try {
        const createUser = await authService.signup(fields)

        res.status(201).send(createUser)
    } catch (error) {
        console.log(error)
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const signin = async (req, res) => {
    const fields = req.body
    console.log(fields)

    if (!fields.email || !fields.password) {
        return res.status(404).send({ message: "all feilds  should  be filled" })
    }

    try {
        const user = await authService.signin(fields)

        console.log(user)

        res.status(200).send({user})
    } catch (error) {
       
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
   
}

const getProfile = async (req, res) => {
    try {
        const user = await pool.query('SELECT userName,email FROM users WHERE id = $1', [req.user.id])
        console.log(user.rows)
        res.status(200).json(user.rows)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

const updateProfile = async (req, res) => {
    try {
        console.log(req.body)
        const { email, newPassword } = req.body
        if (email) {
            const userCheck = await pool.query('SELECT * FROM users WHERE email= $1 AND id != $2 ', [email, req.user.id])
            if (userCheck.rows.length > 0) {
                return res.status(500).json({ message: "email is already in use!" })

            }
        }
        let updatedPassword
        if (newPassword) {
            updatedPassword = await bcrypt.hash(newPassword, 10)
        }

        const updatedUser = await pool.query(
            `UPDATE users
            SET email = COALESCE($1, email), password = COALESCE($2, password)
            WHERE id = $3
            RETURNING id, email, created_at`,
            [email || null, updatedPassword || null, req.user.id]
        )

        if (updatedUser.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'Profile updated successfully',
            user: updatedUser.rows[0],
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { signup, signin, getProfile, updateProfile };
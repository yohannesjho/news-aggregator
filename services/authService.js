const auth = require('../database/auth')

const signup = async (fields) => {
 console.log(fields)
  try {
    const createUser = await auth.signup(fields)

    return createUser

  } catch (error) {
    throw error
  }
}

const signin = async (fields) => {
   
   try {
     const user = await auth.signin(fields)

     

     return user;

 
   } catch (error) {
     throw error
   }
 }

module.exports = { signup, signin }
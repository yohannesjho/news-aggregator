const auth = require('../database/auth')

const signup = async (fields) => {
    
    try {
      const createUser = await auth.signup(fields)

      return createUser
      
    } catch (error) {
        throw error
    }
}

module.exports = {signup}
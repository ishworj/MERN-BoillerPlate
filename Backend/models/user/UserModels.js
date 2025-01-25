import userModel from '../user/UserSchema.js'


//to create user
export const createUser = (userobj)=>{
    return userModel(userobj).save();
}



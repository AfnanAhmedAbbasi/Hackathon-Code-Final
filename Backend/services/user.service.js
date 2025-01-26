const userModel = require("../models/user.model")

module.exports.createUser = async ({ fullname, email, password }) => {
    if (!fullname || !email || !password) {
        throw new Error("All fields are required!");
    }

    const user = new userModel({
        CNIC: CNIC,
        email,
        password,
    });

    
    await user.save();

    return user;
};
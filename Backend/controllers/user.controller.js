const userModel = require("../models/user.model")
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");



module.exports.registerUser = async (req, res, next) => {
    console.log(req.body)
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Validation Error", errors.array());
            return res.status(400).send({ errors: errors.array() })
        }

        const { CNIC, password, email } = req.body;

        const isUserAlreadyExists = await userModel.findOne({ email })

        if (isUserAlreadyExists) {
            return res.status(400).send({ message: "User Already Exists" })
        }

        const hashedPassword = await userModel.hashPassword(password)

        const user = await userService.createUser({
            CNIC: CNIC,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken();

        res.status(201).send({ token, user })

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password")

    if (!user) {
        res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = user.generateAuthToken()

    res.cookie("token", token)

    res.status(200).json({ token, user })
}


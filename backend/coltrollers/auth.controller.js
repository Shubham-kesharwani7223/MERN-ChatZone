import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords don't match"});
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "Username already exists"});
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if(newUser) {
            // Generate JWT token here
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName:  newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
        } else {
            res.status(400).json({err: "Invalid user data"});
        }

    } catch(err) {
        console.log("Error is signup controller", err.message);
        res.status(500).json({err: "Internal Server Error"});
    }
};

export const login = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({err: "Invalid username or password"});
        }

        generateTokenSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch(err) {
        console.log("Error is login controller", err.message);
        res.status(500).json({err: "Internal Server Error"});
    }
};

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});

    } catch(err) {
        console.log("Error is logout controller", err.message);
        res.status(500).json({err: "Internal Server Error"});
    }
};
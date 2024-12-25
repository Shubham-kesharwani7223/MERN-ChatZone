import jwt from "jsonwebtoken";

const generateTokenSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "12d",
    });

    res.cookie("jwt", token, {
        maxAge: 12 * 24 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV != "development",
    });
};

export default generateTokenSetCookie;
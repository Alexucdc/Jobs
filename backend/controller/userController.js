import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try{
        var userData = req.body;
        userData.password = bcrypt.hashSync(userData.password, 10);
        var result = await User.create(userData);
        res.status(200).json(result);
    }catch(e){
        res.status(400).json({
            "message": e.message
        })
    }
}

const loginUser = async (req, res) => {
    var result = await User.findOne({email: req.body.email});
    if(result == null){
        res.status(400).json();
        return;
    }

    var ressultCompare = bcrypt.compareSync(req.body.password, result.password);
    if(ressultCompare == false){
        res.status(400).json();
        return;
    }

    var myUser = {
        _id: result._id,
        name: result.name,
        email: result.email
    };
    var encodedData = jwt.sign(myUser, "codingdojo");
    res.status(200).json(encodedData);
}

export { registerUser, loginUser };
import Auth from "../models/auth.js";
import  Jwt  from "jsonwebtoken";

const signToken = (id) => {
    return Jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  };

  const createSendToken = (data, statusCode, res) => {
    const token = signToken(data._id);
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  
    res.cookie('jwt', token, cookieOptions);
    //Remove Password From Output
  
    data.password = undefined;
    res.status(statusCode).json({
      status: true,
      token,
      data,
    });
  };
export const signup = async(req, res, next) => {
    try {
        const {username, password} = req.body;
        const reso = new Auth({username, password});

        const data = await reso.save()
        // res.status(201).json({
        //     status:true,
        //     data,
        // });

        createSendToken(data,201,res);
    } catch (error) {
        res.status(404).json({error})
    }
}


export const getData = async(req, res, next) => {
    try {
        let doc=Auth.findById(req.params.id);
        const data=await doc;
        res.status(200).json({
            status:true,
            data,
        });
        
    } catch (error) {
        res.json({error})
    }
}
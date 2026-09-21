import { NextFunction, Request, Response } from "express";

const protect = async (req : Request, res: Response, next : NextFunction) =>{
    const {isLoggedIn ,AdminId} = req.session;

    if(!isLoggedIn || !AdminId) {
        return res.status(401).json({
            message : "you are not loggedin..."
        })
    }
    next()
}

export default protect;
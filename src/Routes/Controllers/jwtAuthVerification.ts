import { verify } from "../Utils/jwtGeneratorVerificator";

export default function JWTAuth (req: any, res: any, next: any) {
    const token = req.headers.authorization
    if(!token) return res.status(401).send(false);
    const validator = verify(token)

    if(validator){
        next()
    }
    else{
        return res.status(401).send(false);
    }
}
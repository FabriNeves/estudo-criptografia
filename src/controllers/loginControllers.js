

class loginControllers {
    static async login(req,res){
        console.log(req.headers);
        res.status(200).send("ok!");
    }
}


export default loginControllers;
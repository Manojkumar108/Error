

const home = async(req,res) =>{
    try {
        
        res.json({
            name:"Auth-router using extra route",
            app: "controller",
            satus:"succes"
    
        })
    } catch (error) {
        console.log(error);
    }


}

const register = (req,res)=>{
    console.log(req.body)
    res.json({
        message:req.body
    })
}
export {home,register};
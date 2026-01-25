export const checkCustomerValidation=(req,res,next)=>{

    const {full_name,email, phone} = req.body;
    
    if(!full_name)
    {
        return res.status(400).json("Name is null, please enter full name");
    }

    if(!email || !email.includes("@"))
    {
        return res.status(400).json("Email is null or invalid, please enter proper emailID");
    }

    if(!phone || phone.length<10)
    {
        return res.status(400).json("Phone number is null or invalid");
    }

next();
}
import { supabase } from "../supabaseClient.js";

export const createCustomer=(async(req,res)=>{

    const {full_name, email, phone} = req.body;

    // const {data:existing, error: existerror} = await supabase.from("customers_1")                                                              
    //                                                          .select()
    //                                                           .eq("email",email);                                                          

    //         if(existing)
    //         {
    //             return res.status(409).json("Email exists already");
    //         }
    //         if(existerror)
    //         {
    //             return res.status(500).json("Error", existerror.message);
    //         }
        

    const {data,error} = await supabase.from("customers_1")
                                       .insert([{full_name, email, phone}])
                                       .select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    res.status(200).json({message: "Customer registered successfully", Customer_Details : data});

});

export const getCustomer=(async(req,res)=>{

    const {data,error} = await supabase.from("customers_1")
                                       .select("*");
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
   res.status(200).json({message: "Fetched all customers", Customers: data});

});

export const deleteCustomer=(async(req,res)=>{

    const{customerId} = req.params;
    const{data,error} = await supabase.from("customers_1")
                                      .delete()
                                      .eq("id",customerId)
                                      .select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
     res.status(200).json({message: "Deleted customer", Deleted_customer: data});
    
});
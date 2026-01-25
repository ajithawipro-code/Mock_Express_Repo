import { supabase } from "../supabaseClient.js";

export const createCustomer=(async(req,res)=>{

    const {full_name, email, phone} = req.body;

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
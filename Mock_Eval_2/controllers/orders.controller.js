import { supabase } from "../supabaseClient.js";

export const createOrders=(async(req,res)=>{

    const {product_name, quantity, price, customer_id} = req.body;

    const {data,error} = await supabase.from("orders_1")
                                       .insert([{product_name, quantity, price, customer_id}])
                                       .select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    res.status(200).json({message:"Order placed successfully", Order_Details: data});

});

export const getOrders=(async(req,res)=>{

    const{customerId} = req.params;

    const {data,error}= await supabase.from("orders_1")
                                      .select("*")
                                      .eq("customer_id",customerId);

    if(error)
    {
        return res.status(500).json({error: error.message});
    }
  res.status(200).json({message: "All orders fecthed", Orders: data});
});

export const updateOrders=(async(req,res)=>{

    const {orderId} = req.params;
    const {quantity,price,order_status} = req.body;

    const {data,error} = await supabase.from("orders_1")
                                       .update({quantity,price,order_status})
                                       .eq("id",orderId)
                                       .select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    res.status(200).json({message:"Order updated successfully", Updated_Order: data});

});

export const deleteOrders=(async(req,res)=>{

    const{orderId}=req.params;

    const{data,error}= await supabase.from("orders_1")
                                     .delete()
                                     .eq("id",orderId)
                                     .select();

    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    res.status(200).json({message:"Order Deleted", Deleted_Order: data});
});
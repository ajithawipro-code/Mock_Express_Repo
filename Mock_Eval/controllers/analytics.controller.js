import { readData } from "../models/orders.model.js";

export const getOrdersWithCount=((req,res)=>{

    const data=readData();

    


})

export const getCancelledOrders=((req,res)=>{

    const data=readData();


});

export const getShippedOrders=((req,res)=>{

    const data=readData();

})

export const getTotalRevenue=((req,res)=>{

    const data=readData();

    const productId=Number(req.params.productId);

    const product=data.products.filter(el=>el.id===productId)

    const filtered_product=product.filter(product.status==="cancelled")

    res.status(200).json(filtered_product);



})

export const getAllTotalRevenue=((req,res)=>{

    const data=readData();


})
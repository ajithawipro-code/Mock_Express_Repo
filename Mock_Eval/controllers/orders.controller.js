import { readData , writeData} from "../models/orders.model.js";

export const addOrders=((req,res)=>{

    const data=readData();

    let newId=1;

    if(data.orders.length>0)
    {
        const lastOrder= data.orders[data.orders.length-1];
        newId=lastOrder.id+1;
    }

    const newOrder={
        id: newId,
        productId: req.body.productId,
        quantity: req.body.quantity,
        totalAmount: req.body.totalAmount,
        status: req.body.status,
        createdAt: req.body.createdAt
    }

    data.orders.push(newOrder);

    //writeData(data);
 
    if(req.body.id===data.orders.id)
    {
    let RevenueAmount= data.orders.quantity * req.body.price;
    }

    console.log(data.products.price);
    console.log(data.orders.quantity);

    //console.log(totalAmount);

    res.status(201).json(RevenueAmount);

});

export const getOrders=((req,res)=>{

    const data=readData();

    res.status(200).json(data.orders);

})

export const deleteOrders=((req,res)=>{

    const data=readData();
    const currentDate=Number(req.body.createdAt);

    if(data.orders.createdAt===currentDate)
    {

   data.orders=data.orders.filter(el=>el.createdAt===currentDate)
    }

   console.log(data.orders.createdAt);
   console.log(currentDate);

   data.orders.status=req.body.status;
   
   writeData(data);

   res.status(200).json("Order Cancelled");

});

export const updateOrders=((req,res)=>{

    const data=readData();

    const orderId=Number(req.params.orderId);

    const order=data.orders.find(el=>el.id===orderId);

    

    console.log(order);    
   
    order.status=req.body.status;    

    writeData(data);

    res.status(200).json(data.orders);


});
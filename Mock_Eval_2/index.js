import express from "express";
import dotenv from "dotenv";
import { CustomerRoute } from "./routes/customers.route.js";
import { OrderRoute } from "./routes/orders.route.js";

const app=express();
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT;

app.use("/customers", CustomerRoute);
app.use("/orders", OrderRoute);

app.listen(PORT,()=>{

    console.log(`Server is running in PORT ${PORT}`);


});
import express from "express";
import { OrderRouter } from "./routes/orders.routes.js";
import { AnalyticsRouter } from "./routes/analytics.routes.js";

const app=express();
app.use(express.json());

app.use("/",OrderRouter);
app.use("/analytics", AnalyticsRouter);


app.listen(3000,()=>{
    console.log("Server started in port 3000");
})
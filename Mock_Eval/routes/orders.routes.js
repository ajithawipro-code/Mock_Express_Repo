import express from "express";

import { addOrders,getOrders,updateOrders,deleteOrders } from "../controllers/orders.controller.js";
export const OrderRouter = express.Router();

OrderRouter.post("/orders", addOrders);
OrderRouter.get("/orders", getOrders);
OrderRouter.delete("/orders/:orderId", deleteOrders);
OrderRouter.patch("/orders/change-status/:orderId", updateOrders);


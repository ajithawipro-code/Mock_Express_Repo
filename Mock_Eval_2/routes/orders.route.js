import express from "express";
import { supabase } from "../supabaseClient.js";
import { createOrders, deleteOrders, getOrders, updateOrders } from "../controllers/orders.controller.js";

export const OrderRoute = express.Router();

OrderRoute.post("/add-order", createOrders);

OrderRoute.get("/get-my-orders/:customerId", getOrders);

OrderRoute.put("/update-order/:orderId", updateOrders);

OrderRoute.delete("/delete-order/:orderId", deleteOrders);
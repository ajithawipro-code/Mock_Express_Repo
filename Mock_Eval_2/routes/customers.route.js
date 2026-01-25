import express from "express";
import { createCustomer, deleteCustomer, getCustomer } from "../controllers/customers.controller.js";

export const CustomerRoute=express.Router();

CustomerRoute.post("/register", createCustomer);

CustomerRoute.get("/get-all", getCustomer);

CustomerRoute.delete("/delete-customer/:customerId", deleteCustomer);
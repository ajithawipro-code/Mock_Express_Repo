import express from "express";
import { checkCustomerValidation } from "../middlewares/validation.middleware.js";
import { createCustomer, deleteCustomer, getCustomer } from "../controllers/customers.controller.js";

export const CustomerRoute=express.Router();

CustomerRoute.post("/register", checkCustomerValidation, createCustomer);

CustomerRoute.get("/get-all", getCustomer);

CustomerRoute.delete("/delete-customer/:customerId", deleteCustomer);
import express from "express";

import { getCancelledOrders,getOrdersWithCount,getShippedOrders,getTotalRevenue } from "../controllers/analytics.controller.js";

export const AnalyticsRouter = express.Router();

AnalyticsRouter.get("/allorders", getOrdersWithCount);
AnalyticsRouter.get("/cancelled-orders", getCancelledOrders);
AnalyticsRouter.get("/shipped", getShippedOrders);

AnalyticsRouter.get("/total-revenue/:productId", getTotalRevenue);
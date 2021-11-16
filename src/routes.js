import express from "express";
import { createCar, getCars, setCarAsBought } from "./controllers/carController";
import { createCategory, getCategories } from "./controllers/categoryController";
import { createProducer, getProducers } from "./controllers/producerController";

const routes = express.Router()
const baseURL = "/api/v1/"


routes.get("/api/v1/cars", getCars)
routes.post("/api/v1/cars", createCar)
routes.put("/api/v1/cars/:id", setCarAsBought)

routes.get("/api/v1/categories", getCategories)
routes.post("/api/v1/categories", createCategory)

routes.get("/api/v1/producer", getProducers)
routes.post("/api/v1/producer", createProducer)

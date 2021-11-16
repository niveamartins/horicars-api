import express from "express";
import { createCar, getBoughtCars, getAvailableCars, getCars, setCarAsBought } from "./controllers/carController.js";
import { createCategory, getCategories } from "./controllers/categoryController.js";
import { createProducer, getProducers } from "./controllers/producerController.js";

const routes = express.Router()
const baseURL = "/api/v1/"


routes.get(baseURL + "cars", getCars)
routes.post(baseURL + "cars", createCar)
routes.put(baseURL + "cars/:id", setCarAsBought)
routes.get(baseURL + "cars/bought", getBoughtCars)
routes.get(baseURL + "cars/available", getAvailableCars)

routes.get(baseURL + "categories", getCategories)
routes.post(baseURL + "categories", createCategory)

routes.get(baseURL + "producer", getProducers)
routes.post(baseURL + "producer", createProducer)

export default routes;
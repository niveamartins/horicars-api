import express from "express";
import { createCar, getCars, setCarAsBought } from "./controllers/carController";
import { createCategory, getCategories } from "./controllers/categoryController";
import { createProducer, getProducers } from "./controllers/producerController";

const routes = express.Router()
const baseURL = "/api/v1/"


routes.get(baseURL + "cars", getCars)
routes.post(baseURL + "cars", createCar)
routes.put(baseURL + "cars/:id", setCarAsBought)

routes.get(baseURL + "categories", getCategories)
routes.post(baseURL + "categories", createCategory)

routes.get(baseURL + "producer", getProducers)
routes.post(baseURL + "producer", createProducer)

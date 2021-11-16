import connection from "../database.js";
import carSchema from "../schemas/carSchema.js";
import { db_insertOne } from "../services/insertService.js";
import { db_findOne, db_listAll } from "../services/selectService.js";

async function createCar(req, res) {
    const validation = carSchema.validate(req.body);
    
    if (validation.error) {
        return res.sendStatus(400);
    }

    const {name, value, year, producer, category} = req.body;

    const categoryFound = await db_findOne("categories", "category_id", category);

    if (!categoryFound) {
        return res.status(400).send({
            msg: "category doesnt exist."
        })
    }

    const producerFound = await db_findOne("producers", "producer_id", producer);

    if (!producerFound) {
        return res.status(400).send({
            msg: "producer doesnt exist."
        })
    }

    try {
        await db_insertOne("car", ["name", "value", "year", "producer_id", "category_id"], [name, value, year, producer, category])
        
        return res.sendStatus(201)
    } catch(e) {
        console.log(e)
        return res.sendStatus(500);
    }
}

async function getCars(req, res) {
    const result = await db_listAll("cars", "ORDER BY value ASC")

    if(!result) {
        return res.sendStatus(200)
    } else {
        return res.send({result})
    }
}

async function getBoughtCars(req, res) {
    const result = await db_findOne("cars", "isBought", true);

    if(!result) {
        return res.sendStatus(200)
    } else {
        return res.send({result})
    }
}

async function setCarAsBought(req, res) {
    const carID = req.params.id;

    try {
        await connection.query(`UPDATE cars
        SET isBought = true
        WHERE car_id = $1;`, [carID])

        return res.sendStatus(200)
    } catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }

}

export {createCar, getCars, setCarAsBought, getBoughtCars}
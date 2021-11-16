import producerSchema from "../schemas/producerSchema";
import { db_insertOne } from "../services/insertService";
import { db_findOne, db_listAll } from "../services/selectService";

async function createProducer(req, res) {
    const validation = producerSchema.validate(req.body);
    
    if (validation.error) {
        return res.sendStatus(400);
    }

    const {name} = req.body;

    const result = await db_findOne("producers", "name", name);

    if (result) {
        return res.status(400).send({
            msg: "producer already exists."
        })
    }

    try {
        await db_insertOne("producers", ["name"], [name])
        
        return res.sendStatus(201)
    } catch(e) {
        console.log(e)
        return res.sendStatus(500);
    }
}

async function getProducers(req, res) {
    const result = await db_listAll("producers")

    if(!result) {
        return res.sendStatus(200)
    } else {
        return res.send({result})
    }
}

export {createProducer, getProducers}
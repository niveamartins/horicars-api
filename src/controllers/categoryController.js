import categorySchema from "../schemas/categorySchema";
import { db_insertOne } from "../services/insertService";
import { db_findOne, db_listAll } from "../services/selectService";

async function createCategory(req, res) {
    const validation = categorySchema.validate(req.body);

    if (validation.error) {
        return res.sendStatus(400);
    }

    const {name} = req.body;

    const result = await db_findOne("categories", "name", name);

    if (result) {
        return res.status(400).send({
            msg: "category already exists."
        })
    }

    try {
        await db_insertOne("categories", ["name"], [name])
        
        return res.sendStatus(201)
    } catch(e) {
        console.log(e)
        return res.sendStatus(500);
    }
}

async function getCategories(req, res) {
    const result = await db_listAll("categories")

    if(!result) {
        return res.sendStatus(200)
    } else {
        return res.send({result})
    }
}

export {createCategory, getCategories}
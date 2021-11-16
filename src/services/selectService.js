import connection from "../database";

async function db_listAll(table) {
    const result = await connection.query(`SELECT * FROM ${table.toString()}`);
    
    if(result.rows.length === 0) {
        return false;
    } else {
        return result.rows
    }
}

async function db_findOne(table, column, data) {
    const result = await connection.query(`SELECT * FROM ${table.toString()} WHERE ${column.toString()} = $1`, [data]);

    if(result.rows.length > 0) {
        return false;
    } else {
        return result.rows
    }
}

export { db_listAll, db_findOne }


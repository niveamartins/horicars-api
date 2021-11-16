import connection from "../database.js";

async function db_listAll(table, orderBy = '') {
    const result = await connection.query(`SELECT * FROM ${table.toString()} ${orderBy}`);
    
    if(result.rows.length === 0) {
        return false;
    } else {
        return result.rows
    }
}

async function db_findOne(table, column, data) {
    const result = await connection.query(`SELECT * FROM ${table.toString()} WHERE ${column.toString()} = $1`, [data]);

    if(result.rows.length === 0) {
        return false;
    } else {
        return result.rows
    }
}

export { db_listAll, db_findOne }


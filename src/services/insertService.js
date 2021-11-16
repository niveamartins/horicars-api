import connection from "../database";

async function db_insertOne(table, columns, values) {
    const queryStrings = makeQueryComponents(columns)

    try {
        await connection.query(
            `INSERT INTO ${table}
              ${queryStrings.columns} 
              VALUES ${queryStrings.numbers}`,
            values
        );
        return 1;
    } catch (e) {
        console.log(e);
        return 0;
    }
    
}

function makeQueryComponents(columns) {
    let queryColumns = "(";
    let queryNumbers = "(";

    for(let index in columns) {
        if (index === columns.length - 1) {
            queryColumns = queryColumns + columns[index] + ")"
            queryNumbers = queryNumbers + "$" + (index + 1).toString() + ")"
        } else {
            queryColumns = queryColumns + columns[index] + ", "
            queryNumbers = queryNumbers + "$" + (index + 1).toString() + ", "
        }
    }

    return {
        columns: queryColumns,
        numbers: queryNumbers
    }
}

export { db_insertOne}
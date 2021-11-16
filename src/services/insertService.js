import connection from "../database.js";

async function db_insertOne(table, columns, values) {
    const queryStrings = makeQueryComponents(columns)

    console.log(queryStrings)

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
        console.log(index)
        if (index === columns.length - 1) {
            queryColumns = queryColumns + columns[index] + ")"
            queryNumbers = queryNumbers + "$" + (index + 1) + ")"
        } else {
            queryColumns = queryColumns + columns[index] + ", "
            queryNumbers = queryNumbers + "$" + (index + 1) + ", "
        }
    }
/* { columns: '(name, ', numbers: '($01, ' } */
    
    return {
        columns: queryColumns,
        numbers: queryNumbers
    }
}

export { db_insertOne}
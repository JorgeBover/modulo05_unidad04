var pool = require('./bd');

async function getServicios() {
    var query = 'select * from servicios order by id desc';
    var rows = await pool.query(query);
    return rows;
}

async function agregarServicios(obj) {
    try {
        var query = 'insert to servicios set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {getServicios, agregarServicios};
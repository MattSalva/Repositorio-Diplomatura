var pool = require('./../bd');

async function getEducation() {
    var query = "SELECT * FROM educacion";
    var rows = await pool.query(query);
    return rows;
}

async function insertEducation(obj){
    try {
        var query = "INSERT INTO educacion SET ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteEducationById(id) {
    var query = "DELETE FROM educacion WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getEducationById(id){
    var query = "SELECT * FROM educacion WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editEducationById(obj, id){
    try {
        var query = "UPDATE educacion SET ? WHERE id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}



module.exports = { getEducation, insertEducation, deleteEducationById, getEducationById, editEducationById }
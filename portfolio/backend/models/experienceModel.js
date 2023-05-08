var pool = require('./../bd');

async function getExperience() {
    var query = "SELECT * FROM experiencia";
    var rows = await pool.query(query);
    return rows;
}

async function insertExperience(obj){
    try {
        var query = "INSERT INTO experiencia SET ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteExperienceById(id) {
    var query = "DELETE FROM experiencia WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getExperienceById(id){
    var query = "SELECT * FROM experiencia WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editExperienceById(obj, id){
    try {
        var query = "UPDATE experiencia SET ? WHERE id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}



module.exports = { getExperience, insertExperience, deleteExperienceById, getExperienceById, editExperienceById }
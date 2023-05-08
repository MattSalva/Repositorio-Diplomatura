var pool = require('./../bd');

async function getProjects() {
    var query = "SELECT * FROM proyectos";
    var rows = await pool.query(query);
    return rows;
}

async function insertProjects(obj){
    try {
        var query = "INSERT INTO proyectos SET ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteProjectsById(id) {
    var query = "DELETE FROM proyectos WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getProjectsById(id){
    var query = "SELECT * FROM proyectos WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editProjectsById(obj, id){
    try {
        var query = "UPDATE proyectos SET ? WHERE id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}



module.exports = { getProjects, insertProjects, deleteProjectsById, getProjectsById, editProjectsById }
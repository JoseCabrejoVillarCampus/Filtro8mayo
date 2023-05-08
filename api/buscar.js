let headers = new Headers({
    "Content-Type": "application/json"
});
let puerto = 4001;


const buscarReclutaAll = async () => {
    let config = {
        method: "GET",
        headers: headers
    };
    if (response.ok) {
        const filteredData = data.filter(user => user.evaluacion.nota >= 3);
        return filteredData;
    } else {
        console.error("Error al obtener los usuarios del servidor.");
        return await (await fetch(`http://localhost:${puerto}/reclutas`, config)).json();
    }
    
}


export default {
    buscarReclutaAll
}
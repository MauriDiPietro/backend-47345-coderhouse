const getApi = async() => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const response = await resp.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

getApi()

/* ------------------------------------ - ----------------------------------- */

const getData = async(username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        // console.log(response);
        if(!response.status === 200) throw new Error('Error al obtener informacion del ususario');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const getDataPokemon = async(id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/contest-type/${id}`);
        // console.log(response);
        if(!response.status === 200) throw new Error('Error al obtener informacion del ususario');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData('MauriDiPietro')
getDataPokemon(1)


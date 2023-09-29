const mostrarLista = (array) => {
    if(Array.isArray(array)){
        if(array.length === 0) return 'Lista vacia'
        else {
            console.log(`La longitud del array es ${array.length}`);
            return array.map((x)=>(x));
            // for (const item of array) {
            //     console.log(item);
            // }
        }
    } else return 'No es un array';
};

const array1 = [1,2,3,4,5,6,7,8]
const array2 = []

console.log(mostrarLista(array1));

// console.log(Array.isArray(noArray));
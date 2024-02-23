import { Tareas } from "./utils/tareas.js";

const tarea = new Tareas();

tarea.add('Sacar a pasear al perro');
tarea.add('Darle de comer al perro');

tarea.complete('Sacar a pasear al perro');


tarea.saveToFile();
console.log('se guardó en el archivo');
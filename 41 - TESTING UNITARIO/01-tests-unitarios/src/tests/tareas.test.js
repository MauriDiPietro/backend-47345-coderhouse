import { Tareas } from "../utils/tareas.js";
import Chai from 'chai';
const { expect, assert } = Chai;


describe('Tests de tareas', ()=>{
    it('Debería crear el contenedor de tareas vacío', ()=>{
        //preparacion
        const tareas = new Tareas();

        //ejecucion
        const listTareas = tareas.list();

        //afirmaciones
        //expect
        expect(listTareas).to.have.lengthOf(0);

        //assert
        assert.lengthOf(listTareas, 0)
        assert.strictEqual(listTareas.length, 0);
    });

    it('Deberia crear tareas correctamente', ()=>{
        const tareas = new Tareas();

        tareas.add('programar')

        const listTareas = tareas.list();

        assert.strictEqual(listTareas.length, 1);
        assert.deepStrictEqual(listTareas[0], {
            complete: false, title: 'programar'
        })
    });

    it('deberia marcar una tarea como completa', ()=>{
        const tareas = new Tareas();

        tareas.add('programar')

        const listTareas = tareas.list();

        tareas.complete('programar');

        assert.deepStrictEqual(listTareas[0], {
            complete: true, title: 'programar'
        })
    })

    it('comprobar error en completar tarea inexistente', ()=>{
        const tareas = new Tareas();
        const errorEsperado = 'Tarea no encontrada'

        tareas.add('programar')

        const fn1 = () => tareas.complete('caminar');

        assert.throws(fn1, Error, errorEsperado)
        expect(fn1).to.throw(Error, errorEsperado)
        
    })
})


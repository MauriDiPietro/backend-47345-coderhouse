import TaskModel from '../models/task.model.js';
import UserModel from '../models/user.model.js';

//relacion uno a muchos (un usuario tiene muchas tareas) 
UserModel.hasMany(TaskModel, { as: 'tasks', foreignKey: 'userId' });//se añade una clave userId a la tabla de tareas
                            //alias
//tareas pertenecen a usaurios
TaskModel.belongsTo(UserModel, { as: 'user' });
        // title    |   content     |   date    |   userId  |
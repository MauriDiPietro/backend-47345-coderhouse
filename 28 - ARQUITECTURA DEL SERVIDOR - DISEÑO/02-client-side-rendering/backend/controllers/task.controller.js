import TaskModel from '../models/task.model.js';
import UserModel from '../models/user.model.js';

export const getAllTasks = async (req, res)=>{
    try{
        const tasks = await TaskModel.findAll();
        res.json(tasks)
    }catch(err){
        res.json({message: err.message});
    }
};

export const getAllTasksByUser = async(req, res)=>{
    const { id } = req.params;
    try {
        const tasks = await TaskModel.count();
        if(tasks !== 0){
            const tasksByUser = await TaskModel.findAll({
                where: {
                    userId: id      //userId = req.params.id
                },
                include:[{
                    model: UserModel,
                    as: 'user'          //alias de la asociacion
                }]
            })
            res.status(201).json(tasksByUser)
        }
    } catch (err) {
        res.json({message: err.message});
    }
}

export const getTask = async (req, res)=>{
    try{
        const task = await TaskModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(task[0])
    }catch(err){
        res.json({message: err.message});
    }
};

export const createTask = async (req, res)=>{   //debe tomar el id del usuario
    try{
        const {title, content, date, userId} = req.body
        await TaskModel.create({
            title, 
            content,
            date,
            userId
    });
        res.json({
            title,
            content,
            date,
            userId
        })
    }catch(err){
        res.json({message: err.message});
    }
}


export const updateTask = async (req, res)=>{
    try{
        await TaskModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            'message': `Registro actualizado correctamente`
        })
    }catch(err){
        res.json({message: err.message});
    }
};

export const deleteTask = async (req, res)=>{
    try{
        await TaskModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': `Registro eliminado`
        })
    }catch(err){
        res.json({message: err.message});
    }
};
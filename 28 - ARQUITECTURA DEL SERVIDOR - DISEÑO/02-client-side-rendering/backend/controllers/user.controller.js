import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import TaskModel from "../models/task.model.js";
import {getAllTasksByUser} from '../controllers/task.controller.js'
dotenv.config();

export const createUser = async (req, res)=>{
  
    const {username, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({message: 'password incorrect'});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password.toString(), salt);
    try{
      await UserModel.create({
        username: username,
        password: hashPassword
      })
      res.status(200).json({message: 'User register OK!'})
    }catch(err){
      res.status(500).send({message: err.message})
    }
}; 

export const getUserById = async(req, res)=>{
  const { id } = req.params;
    try{
      const user = await UserModel.findOne({
        where: {
          id
        },
        include: [{
          model: TaskModel,
          as: 'tasks',
          attributes: ['title', 'content']
        }],
        attributes: ['id', 'username']
      })
      if(!user){
        res.send('user not exists in database!')
      }
      res.json(user)
    }catch(err){
        res.json({message: err.message});
    }
}

export const getUsers = async(req, res)=>{

    try{
      const user = await UserModel.findAll({
        include: [{
          model: TaskModel,
          as: 'tasks',
          attributes: ['title']
        }],
        attributes: ['id', 'username']
      })
      if(!user){
        res.send('database is empty!')
      }
      res.json(user)
    }catch(err){
        res.json({message: err.message});
    }
}

export const getUser = async(req, res)=>{
  // const token = req.headers['x-access-token']
  try {
    // const decoded = jwt.verify(token, process.env.SECRET)
    // const username = decoded.username
    const user = await UserModel.findOne({
            // where: {
            //   authorization
            // },
            include: [{
              model: TaskModel,
              as: 'tasks',
              attributes: ['title', 'content', 'date']
            }],
            attributes: ['id', 'username']
          })
          return {status: 200, user: username}
  } catch (error) {
    console.log(error)
    res.json({status: 'error', error: 'invalid token'});
  }
}

export const loginUser = async (req, res)=>{
  try{
    const user = await UserModel.findAll({
      where: {
        username: req.body.username
      }
    });
    const match = await bcrypt.compare(req.body.password.toString(), user[0].password);
    if(!match) return res.status(400).json({message: 'Wrong password!'});
    const userId = user[0].id;
    const username = user[0].username;
    const accessToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN, {
      expiresIn: '1d'
    });
    const refreshToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN, {
      expiresIn: '1d'
    }); 
    await UserModel.update({refresh_token: refreshToken}, {
      where: {
        id: userId
      }
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    })
    res.json({ accessToken, userId })
    console.log(accessToken)
  }catch(err){
    res.status(404).json({message: err.message});
  }
};

export const refreshToken = async(req, res)=>{
  console.log('console.log--->', req.cookies.refreshToken)
  try {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(401);
    const user = await UserModel.findAll({
      where: {
        refresh_token: refreshToken
      }
    });
    //////////////////////////////////////////
    const posts = await TaskModel.findAll({
      where: {
        userId: user[0].id      
      },
      attributes: ['id','title', 'content', 'date']
    })
    // const posts = await getAllTasksByUser()
    if(!user[0]) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.ACCESS_TOKEN, (err, decoded)=>{
      if(err) return res.json(err);
      const userId = user[0].id;
      const username = user[0].username;
      const postsUser = posts
      const accessToken = jwt.sign({userId, username, postsUser}, process.env.ACCESS_TOKEN, {
        expiresIn: '1d'
      });
      res.json({ accessToken });
    })
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

export const logout = async (req, res)=>{
  try {
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.sendStatus(204);
    const user = await UserModel.findAll({
      where: {
        refresh_token: refreshToken
      }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id
    await UserModel.update({refresh_token: null}, {
      where: {
        id: userId
      }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
    
  } catch (error) {
    res.json({'message': error})
  }
};
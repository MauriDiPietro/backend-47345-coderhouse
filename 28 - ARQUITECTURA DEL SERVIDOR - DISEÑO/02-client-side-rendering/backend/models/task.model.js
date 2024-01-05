import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import moment from 'moment';
import dotenv from 'dotenv';
dotenv.config();

const TaskModel = db.define('tasks', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATEONLY,
        get: function() {
            return this.getDataValue('date').toLocaleString('en-GB')
         }
    //      get: function(){  
    //     moment(getDataValue('paymentDate')).toLocaleString('en-GB', { timeZone: 'UTC' })
    //   }
    //   get: function() { // or use get(){ }
    //     return this.getDataValue('paymentDate')
    //       .toLocaleString('en-GB', { timeZone: 'UTC' });
    //   }
    }
});

export default TaskModel;
import db from '../connection.js';
import { DataTypes } from 'sequelize';

export const UserModel = db.define('users', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    passowrd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user"
    },
    isGithub: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isGoogle: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

//! --> product manager
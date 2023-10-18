import { DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("User", {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true  
        },
        full_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                isAlpha: true //this will condition the name to only have letters
            }
        },
        email: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                isEmail: true //this will condition to be a email
            }
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        dateBirth:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true, //TO ASK
            validate: {
                isNumeric: true
            }
        },
        photo:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        isActivated:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

    })
}
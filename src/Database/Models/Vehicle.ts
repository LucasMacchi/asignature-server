import { DataTypes, Sequelize } from "sequelize";

export default function(sequelize: Sequelize){
    sequelize.define("Vehicle", {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true
        },
        patent: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true  
        },
        brand: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        model: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true  
        }
    })
}
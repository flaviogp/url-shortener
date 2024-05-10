import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Sequelize,
} from "sequelize";



export default class Url extends Model<InferAttributes<Url>, InferCreationAttributes<Url>> {
  declare id: number;
  declare original: string;
  declare short: CreationOptional<string>;

  static start(sequelize: Sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      original: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      short: {
        type: DataTypes.STRING,
        unique: true,
      }
    }, {
      sequelize,
      modelName: 'Url',
      tableName: 'urls'
    })
    return this
  };


};

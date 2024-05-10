import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from "sequelize";
import Config from '../config/database';
import Url from "../models/Url";
import { SequelizeMethod } from 'sequelize/types/utils';

const models = [Url];

const connection = new Sequelize(Config as SequelizeMethod)

models.forEach(model => model.start(connection))

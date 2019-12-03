import mongoose, { mongo } from 'mongoose'
mongoose.Promise = global.Promise
mongoose.set( 'useCreateIndex' )
const Schema = new mongoose.Schema

const homeSchema = new Schema({
    
})
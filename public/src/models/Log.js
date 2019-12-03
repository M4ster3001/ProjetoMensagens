import mongoose, { SchemaTypes } from 'mongoose'

mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;

const logSchema = new Schema({
       method: {
           type: String,
           trim: true
       },
       url: {
           type: String,
           required: true,
           trim: true
       },
       status: {
           type: SchemaTypes.Number, 
           required: true,
           trim: true
       },
       content_length: {
           type: SchemaTypes.Number,
           required: true,
           trim: true
       },
       response_time: {
           type: SchemaTypes.Number,
           required: true,
           trim: true
       }
    },
    { timestamps: true, collection: 'logs' }
);

export default mongoose.model('Log', logSchema);
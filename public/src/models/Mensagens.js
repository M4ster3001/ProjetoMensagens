import mongoose from 'mongoose'

mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const mensagemSchema = new Schema (
    {
        name: {
            type: String,
            trim:  true
        },
        message: {
            type: String,
            trim: true
        },
        message_convertida: {
            type: String,
            trim: true
        },
    },
    { timestamps: true, collection: 'mensagens'  }
)

export default mongoose.model('Mensagem', mensagemSchema)

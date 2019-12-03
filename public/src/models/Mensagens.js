import mongoose from 'mongoose'

mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const mensagemSchema = new Schema (
    {
        name: {
            type: String,
            required: 'Nome obrigatório',
            trim:  true
        },
        message: {
            type: String,
            required: 'É necessário colocar algo',
            trim: true
        },
    },
    { timestamps: true, collection: 'mensagens'  }
)

export default mongoose.model('Mensagem', mensagemSchema)

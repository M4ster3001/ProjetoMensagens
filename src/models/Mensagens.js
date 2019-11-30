import mongoose from 'mongoose'

mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const mensagemSchema = new Schema ({
    mensagem: {
        type: String,
        required: 'É necessário colocar algo'
    }
})

export default mongoose.model('Mensagem', mensagemSchema)

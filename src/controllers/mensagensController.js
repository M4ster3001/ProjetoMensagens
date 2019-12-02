import mongoose from 'mongoose'
import Mensagens from '../models/Mensagens'

//const Mensagens = mongoose.model('Mensagens', mensagemSchema);

export async function insertMessage( req, res ) {
   
    const newMessage = new Mensagens( req.body );

    await newMessage.save(( error, mensagem ) => {
        if ( error ) { res.json( { result: error }); }
        res.json({ result: mensagem });
    })
}

export async function viewMessage( req, res ) {
    await Mensagens.findOne({ message: req.body.message }, ( error, message ) => {
        if ( error ) { res.json( error ); }
        res.json( message );
    });
}

export async function deleteMessage(req, res) {
    await Mensagens.findOneAndDelete({ message: req.body.message }, ( error, message ) => {
        if ( error ) { res.json( error ); }
        res.json( message );
    })
}

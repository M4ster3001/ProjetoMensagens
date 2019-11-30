import mongoose from 'mongoose'
import Mensagens from '../models/Mensagens'

//const Mensagens = mongoose.model('Mensagens', mensagemSchema);

export function insertMessage( req, res ) {
   
    const newMessage = new Mensagens( req.body );

    newMessage.save(( error, mensagem ) => {
        if ( error ) { res.json( error ) }
        res.json({ message: 'salvo' });
    })
}

export function viewMessage( req, res ) {
    Mensagens.findOne({ message: req.params.message }, ( error, message ) => {
        if ( error ) { res.json( error ); }
        res.json( message );
    });
}

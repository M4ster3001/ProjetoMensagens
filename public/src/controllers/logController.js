import Log from '../models/Log'

export async function insertLog(req, res) {
    const arr_log = new Log( req.body );

    try{
        await arr_log.save();
        res.json({ message: 'save' });
    }catch(e){
        res.json( e );
    }
}
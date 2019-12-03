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

export function convertMessageNumber(req, res) {
    
    let sch_number;
    let final_number_letra = '';
    let num_letra_ant;

    for(const letra of req.body.message) {
        if( letra ){
            sch_number = searchNumber( letra );

            if( sch_number.num_letra_atual == num_letra_ant ){
                final_number_letra += '_' + sch_number.num_letra;
            }else{               
                final_number_letra += '' + sch_number.num_letra;
            }

            num_letra_ant = sch_number.num_letra_atual;

        }
    }
    res.json({ result: final_number_letra });
}

export function searchNumber( letra ) {

    let arr_numbers = {
        0: [ ' ' ],
        2: [ 'A', 'B', 'C' ],
        3: [ 'D', 'E', 'F' ],
        4: [ 'G', 'H', 'I' ],
        5: [ 'J', 'K', 'L' ],
        6: [ 'M', 'N', 'O' ],
        7: [ 'P', 'Q', 'R', 'S' ],
        8: [ 'T', 'U', 'V' ],
        9: [ 'W', 'X', 'Y', 'Z' ]
    }

    let arr_numbers_split;
    let arr_numbers_espaco;
    let number_letra;
    let number_letra_final = '';
    let num_vezes_number = 0;

    for(let i = 0; i <= 9; i++) {  

        arr_numbers_espaco = arr_numbers[ i ] + '';     
        arr_numbers_espaco = arr_numbers_espaco.replace(/,/g, ';');
        arr_numbers_split = arr_numbers_espaco.split(';');

        let j = 1;
        for(const letra_arr of arr_numbers_split){         
            if( letra_arr.toString().toUpperCase() === letra.toString().toUpperCase()){
                num_vezes_number = j;
                number_letra = i;
            }           
            j++;
        }
        
    }       

    if((number_letra || number_letra === 0) && num_vezes_number){           
        for(let i = 0; i < num_vezes_number; i++){ 
            number_letra_final += '' + number_letra; 
        }
    }

    return { num_letra: number_letra_final, num_letra_atual: number_letra };
}

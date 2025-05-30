
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;



export interface ICliente extends mongoose.Document {  
    cliente: string;
    telefono: string;  
 }

 const ClienteSchema = new Schema(
    {
        cliente: {
            type: String,
            required: [true, 'cliente required'],
            unique: true
        },         
        telefono: {
            type: String,
            required: [true, 'telefono required'],
            unique: true
        }
    }
);

const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);
export default Cliente;
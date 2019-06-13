import {Schema, model} from 'mongoose'

const client=new Schema({
    documento: String
})

export default model('Cliente', client);
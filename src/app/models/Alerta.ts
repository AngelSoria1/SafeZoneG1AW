import { Users } from "./Users"

export class Alerta{
    idAlerta:number=0
    mensajeAlerta:String=""
    tipoAlerta:String=""
    fechaAlerta:Date=new Date()
    horaAlerta:string = new Date().toLocaleTimeString()
    vistoAlerta:boolean=false
    user:Users=new Users()
}
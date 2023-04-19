import {Injectable} from '@angular/core';
import { ICliente } from '../cliente/interfaces/cliente.interface';

@Injectable()
export class ClienteService{
    constructor(){
        console.log('servicio ejecutandose');
    }
    listaClientes: ICliente []=[
        {
          nombre:'juan',
        telefono:'7372-3232'},
        {
          nombre:'juan',
        telefono:'7372-3232'},
        {
          nombre:'juan',
        telefono:'7372-3232'}
    
    
      ]
      agregarServicio(cliente:ICliente):void{
            this.listaClientes.push(cliente);
     }
}
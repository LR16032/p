import { Component, OnInit } from '@angular/core';
import { ICliente } from './interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent  {


listaClientes:ICliente[]=[];
constructor(private ClienteService:ClienteService){
    this.listaClientes=ClienteService.listaClientes;
}





}



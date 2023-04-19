import { Component,Input } from '@angular/core';
import { ICliente } from '../cliente/interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent  {
@Input()//Indicamos que este componente recibira un array desde el componente padre
listaClientes:ICliente[]=[]; 




}

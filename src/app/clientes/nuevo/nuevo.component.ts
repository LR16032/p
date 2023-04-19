import { Component, Input} from '@angular/core';
import { ICliente } from '../cliente/interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent  {

  constructor(private service:ClienteService) { 
      
   // service.agregarServicio(this.nuevoCliente);
   }



  nuevoCliente:ICliente={
    nombre:'',
    telefono:''
   }
  agregar():void{

 
    let nombre = this.nuevoCliente.nombre;
    let telefono= this.nuevoCliente.telefono;
    if(nombre!="" && telefono!=""){
      //this.listaClientes.push({nombre:nombre,telefono:telefono});
      this.service.agregarServicio({nombre:nombre,telefono:telefono})
      
    }
     
  
     this.nuevoCliente.nombre="";
     this.nuevoCliente.telefono="";
  
    
  
     
   }
   // service:ClienteService;

   

  

}

import { Component } from "@angular/core";

@Component({
   selector:'app-personas',
   templateUrl:'./personas.component.html'

})

export class PersonasComponent{
    title:string = 'Persona';

    numero:number = 7;
    resultado = 0;

    // factorial(numero:number):number{
    //     if(numero==1){
    //          this.resultado=this.resultado+1;
    //     }else{
    //         this.numero=this.numero+factorial(numero);
    //     }
    // }

        
  
    
    factorial(numero:number):number{
        
        if(numero==1){
           
        return 1;
       }
     
     this.resultado=this.factorial(numero-1)*numero;
     console.log(this.resultado);
       return this.resultado;
    
    }

    getNumero():number{
        return this.numero;
    }


}
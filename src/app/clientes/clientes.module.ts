import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ListasComponent } from './listas/listas.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ClienteService } from './services/cliente.service';


@NgModule({
  declarations: [
    ClienteComponent,
    ListasComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports:[ClienteComponent],
  providers:[ClienteService]
})
export class ClientesModule {}

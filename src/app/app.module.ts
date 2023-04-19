import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './Personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

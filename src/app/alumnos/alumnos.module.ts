import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlumnoComponent } from "./alumno/alumno.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        AlumnoComponent
    ],

    imports:[CommonModule,
            BrowserModule
    ],

    exports:[AlumnoComponent]
})

export class AlumnosModule{}
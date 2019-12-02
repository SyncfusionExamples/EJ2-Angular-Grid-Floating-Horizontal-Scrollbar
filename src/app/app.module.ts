import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the DashboardLayoutModule for the Dashboard Layout component
import { GridAllModule  } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Globals } from "./app-globals";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridAllModule  
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }

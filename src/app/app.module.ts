import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { StudentComponent } from './student/student.component';
import { TemFormComponent } from './tem-form/tem-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    StudentComponent,
    TemFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   }


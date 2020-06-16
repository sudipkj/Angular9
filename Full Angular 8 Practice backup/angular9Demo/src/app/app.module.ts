import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpPipePipe } from './emp-pipe.pipe';
import { StudentComponent } from './student/student/student.component';
import { StudentRegistrationComponent } from './student/student/student-registration/student-registration.component';
import { StudentDetailsComponent } from './student/student/student-details/student-details.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    EmpPipePipe,
    StudentComponent,
    StudentRegistrationComponent,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

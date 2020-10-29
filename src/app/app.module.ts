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
import {MatCardModule} from '@angular/material/card';
import { MatdesignComponent } from './matdesign/matdesign.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Portal1Component } from './portal1/portal1.component';
import { Portal2Component } from './portal2/portal2.component';
import { Portal3Component } from './portal3/portal3.component';




@NgModule({
  declarations: [
    AppComponent,
    EmpPipePipe,
    StudentComponent,
    StudentRegistrationComponent,
    StudentDetailsComponent,
    MatdesignComponent,
    Portal1Component,
    Portal2Component,
    Portal3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports : [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

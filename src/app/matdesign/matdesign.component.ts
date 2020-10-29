import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-matdesign',
  templateUrl: './matdesign.component.html',
  styleUrls: ['./matdesign.component.css']
})
export class MatdesignComponent implements OnInit {

  matForm : FormGroup;

  constructor(formGroupBuilder : FormBuilder) {
    this.matForm = formGroupBuilder.group({
      firstField : ['', [Validators.required, Validators.maxLength(10), Validators.email]],
      secondField : ['', [Validators.required, Validators.maxLength(100)]],
      // rEmailId : ['', [Validators.required, Validators.email]],
      // rPassword : ['', [Validators.required, Validators.maxLength(10)]],
    })
   }

  ngOnInit(): void {
  }

}

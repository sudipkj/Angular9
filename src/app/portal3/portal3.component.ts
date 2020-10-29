import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-portal3',
  templateUrl: './portal3.component.html',
  styleUrls: ['./portal3.component.css']
})
export class Portal3Component implements OnInit {

  signUpForm : FormGroup;
  form : any;
  rFirstName : string;
  template : boolean = false;
  reactive : boolean = false;
  formArray : boolean = false;
 

  constructor() { }

  ngOnInit(): void {
    this.signUpForm.get('rEmailId').statusChanges.subscribe(
      uname =>{
        console.log("value changed to : " + uname)
      }
    )
    this.signUpForm.statusChanges.subscribe(
      uname =>{
        console.log("value changed to : " + uname)
      }
    )
  }

  printContacts(){
    console.log(this.form.get("contactDetails").value);
  }
  addContact(){
    console.log("add contact called");
    this.form.get("contactDetails").push(new FormControl());
    
  }

  postData(signUpForm : any){
    console.log(signUpForm.controls.rFirstName.value);
    console.log(signUpForm.value);
    this.rFirstName = this.signUpForm.get('rFirstName').value;
    console.log("get first name value : " +this.rFirstName);
    
  }

  goToForms(val : string){
    if(val == 'template'){
      this.template= true;
      this.reactive = false;
      this.formArray = false;
    }else if(val == 'formArray'){
      this.reactive = false;
      this.template= false;
      this.formArray = true;
      console.log("show form Array")
    }else{
      this.reactive = true;
      this.template= false;
      this.formArray = false;
    }
    
  }

  register(regForm : any){
    var name = regForm.controls.fName.value;
    console.log(regForm.value);
  }

}

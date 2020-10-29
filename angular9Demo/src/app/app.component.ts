import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';
import { StudentServiceService } from './student/student-service.service';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public heading :string = "Learning from sahosoft !!";
  public message : string = 'Message for property biding';
  public twoWayBidningData : string = "Defualt Value";
  students : any[];
  data : any[];
  signUpForm : FormGroup;
  rFirstName : string;
  rSecondName : string;
  rEmailId : string;
  form : any;
  contactList : any;
  constructor(private router : Router, private formBuilder : FormBuilder, private commonService : CommonService){
    this.signUpForm = formBuilder.group({
      rFirstName : ['', [Validators.required, Validators.maxLength(10)]],
      rSecondName : ['', [Validators.required, Validators.maxLength(10)]],
      rEmailId : ['', [Validators.required, Validators.email]],
      rPassword : ['', [Validators.required, Validators.maxLength(10)]],
    })


    this.students=commonService.getStudents();
    this.data = commonService.getCountryWiseData();
  }
  ngOnInit(){
    this.form = new FormGroup({ contactDetails : new FormArray([ new FormControl('2564'), new FormControl()])});

    // this.signUpForm.get('rFirstName').valueChanges.subscribe(
    //   uname =>{
    //     console.log("value changed to : " + uname)
    //   }
    // )
  //   this.signUpForm.valueChanges.subscribe(x => {
  //     console.log('form value changed')
  //     console.log(x.rFirstName)
  //     console.log(x.rSecondName)
  // })
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
  title = 'angular9Demo';
  toggleFirst : boolean = false;
  toggleSecond : boolean = false;
  showAdd : boolean = true;
  choosenVal : string;

  printContacts(){
    console.log(this.form.get("contactDetails").value);
  }
  addContact(){
    console.log("add contact called");
    this.form.get("contactDetails").push(new FormControl());
  }
  buttonClicked(){
    alert("Button is clicked");
  }

  toggleDivFirst(){
    console.log("First radio is clicked");
    this.toggleFirst = true;
    this.toggleSecond = false;
  }
  toggleDivSecond(){
    console.log("Second radio is clicked");
    this.toggleFirst = false;
    this.toggleSecond = true;
  }

  showIndiaAddress(){
    console.log("Show the riyadh address");
    this.showAdd = true;

  }
  showRiyadhAddress(){
    console.log("Show the riyadh address");
    this.showAdd = false;

  }
  setTeam(val : any){
    console.log("value is : " + val.target.value)
    this.choosenVal = val.target.value;
  }

  getMoreStudents(){
    console.log("Get more students starts");
    this.students = this.commonService.getMoreStudents();
    console.log("Get more students ends");
  }
  trackByStudentsId(index : number, student : any) : string{
    return student.id;
  }

  getCSSClass(mode : string) : string{
    let cssClass : any;
    if(mode == "mode"){
      cssClass = {
        One : true,
        Two : true,
        Three : false
      }
    }

    return cssClass;
  }
  
  employeeDetails : any[] = this.commonService.getEmployees()

  goToEmployee(val : string) : void{
    if(val == 'emp')
    this.router.navigate(['/employee']);
    else this.router.navigate(['./student']);
  }

   portal1: boolean = true;
   portal2: boolean = false;
   portal3: boolean = false;
  goToportal(portal : string): void{
    console.log("in goto portal")
    if(portal == 'showportal1'){
      console.log("in goto portal 1")
     this.portal1 = true; 
     this.portal2=false;
     this.portal3 = false;
    }else if(portal == 'showportal2'){
      console.log("in goto portal 2")
      this.portal2=true;
      this.portal1 = false;
      this.portal3 = false;
    }else if(portal == 'showportal3'){
      console.log("in goto portal 3")
      this.portal2=false;
      this.portal1 = false;
      this.portal3 = true;
    }
    
  }

  register(regForm : any){
    var name = regForm.controls.fName.value;
    console.log(regForm.value);
  }
 
  postData(signUpForm : any){
    console.log(signUpForm.controls.rFirstName.value);
    console.log(signUpForm.value);
    this.rFirstName = this.signUpForm.get('rFirstName').value;
    console.log("get first name value : " +this.rFirstName);
    
  }

  template : boolean = false;
  reactive : boolean = false;
  formArray : boolean = false;
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
}

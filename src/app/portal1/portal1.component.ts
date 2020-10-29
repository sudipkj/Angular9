import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-portal1',
  templateUrl: './portal1.component.html',
  styleUrls: ['./portal1.component.css']
})
export class Portal1Component implements OnInit {

  toggleFirst : boolean = false;
  toggleSecond : boolean = false;
  showAdd : boolean = true;
  choosenVal : string;
  students : any[];
  data : any[];
  

  constructor(private commonService : CommonService) { 
    this.students=commonService.getStudents();
    this.data = commonService.getCountryWiseData();
  }

  ngOnInit(): void {
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
}

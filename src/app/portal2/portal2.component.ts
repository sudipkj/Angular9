import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal2',
  templateUrl: './portal2.component.html',
  styleUrls: ['./portal2.component.css']
})
export class Portal2Component implements OnInit {

  constructor(private commonService : CommonService, private router: Router ) { }

  ngOnInit(): void {
  }

  public heading :string = "Learning from sahosoft !!";
  public message : string = 'Message for property biding';
  public twoWayBidningData : string = "Defualt Value";


  employeeDetails : any[] = this.commonService.getEmployees()

  goToEmployee(val : string) : void{
    if(val == 'emp'){
      
      this.router.navigate(['/employee']);
    }
    
    else this.router.navigate(['./student']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router : Router){  }
  ngOnInit(){  }

  goToportal(portal : string): void{
    
    if(portal == 'showportal1'){
      console.log("Route to portal 1")
     this.router.navigate(['/portal1'])
    }else if(portal == 'showportal2'){
      console.log("in goto portal 2")
      this.router.navigate(['/portal2'])
    }else if(portal == 'showportal3'){
      console.log("in goto portal 3")
      this.router.navigate(['/portal3'])
    }else if (portal == 'matdesign'){
      console.log("in goto matdesign")
      this.router.navigate(['/matdesign'], {replaceUrl : true})
    }
    
  }
  
}

import { Component, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

import {MatTableDataSource} from '@angular/material/table';

export class PeriodicElement {
  position : number;
  picker : Date;
  teaMaking : boolean;
  yoga : boolean;
  washingUtensils : boolean;
  studyAngular : boolean;
  drinkHerbalShake : boolean;
  drinkWarmWater : boolean;
  exercise : boolean;
  drinkMorningJuice : boolean;
  hairOil : boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MatTableDataSource,{static:true}) table: MatTableDataSource<any>;

  constructor() {}

  displayedColumns: string[] = ['position', 'picker','teaMaking', 'yoga', 'washingUtensils', 'studyAngular',
   'drinkHerbalShake', 'drinkWarmWater', 'drinkMorningJuice', 'hairOil'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  activityDate = new Date();

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


   /** The label for the checkbox on the passed row */
   checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
   
  }
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  savedata(dataSource : MatTableDataSource<PeriodicElement> ) {
    console.log(dataSource);
  }

  addRow(){
    
    this.dataSource.data.push({position : this.dataSource.data.length + 1, picker : new Date(),teaMaking: false, yoga : false, washingUtensils : false, studyAngular: false, 
      drinkHerbalShake : false, drinkWarmWater : false, exercise : false, drinkMorningJuice : false, hairOil : false}
      );
    console.log("latest value of datasource is : "+this.dataSource.data);
    this.dataSource.data.length + 1
    return this.dataSource.filter = "";
  }

 
}

import { Component, ViewChild } from '@angular/core';
import { ModulesList } from './menu';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public modulesList: Array<any>;
  public classifications: string[] = [];
  public selectedClassification = 'Read';

  public selectionList = ["Read", "Write", "Total"];
  constructor() {
    this.modulesList = ModulesList;
  }

  public onDropdownItemSelected(data: any): void {
    this.selectedClassification = data.srcElement.value.toString();
  }
}


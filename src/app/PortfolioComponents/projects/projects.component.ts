import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  Prj1Clicked: boolean = false;
  Prj2Clicked: boolean = false;
  Prj3Clicked: boolean = false;
  mainScreen: boolean = true;
  ngOnInit() {
    
  }

  
  togglepopup(btnno: string) {
    if (btnno == '1') {
      this.Prj1Clicked = true;
      this.Prj2Clicked = false;
      this.Prj3Clicked = false;
      this.mainScreen=false;
    }
    else if (btnno == '2') {
      this.Prj1Clicked = false;
      this.Prj2Clicked = true;
      this.Prj3Clicked = false;
      this.mainScreen=false;


    }
    else if (btnno == '3') {
      this.Prj1Clicked = false;
      this.Prj2Clicked = false;
      this.Prj3Clicked = true;
      this.mainScreen=false;


    }
  }
  popupclose() {
    this.mainScreen=true;
    this.Prj1Clicked = false;
    this.Prj2Clicked = false;
    this.Prj3Clicked = false;
   

  }
}

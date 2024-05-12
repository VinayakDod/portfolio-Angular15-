import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  NavExpand: boolean = false;
  NavClick() {
    if (this.NavExpand) {
      this.NavExpand = false;
    }
    else {
      this.NavExpand = true;
    }

  }

}

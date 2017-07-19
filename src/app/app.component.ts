import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isActive = '';

  onHamburger() {
    this.isActive == '' ? this.isActive = 'is-active' : this.isActive = '';
    console.log(document.getElementById('hamburger-5'));
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  onGrowDiv() {
    var growDiv = document.getElementById('grow');
    console.log(document.getElementById('grow'));
    console.log(growDiv.clientHeight);
    console.log(growDiv.style);
    if (growDiv.clientHeight) {
      growDiv.style.height = '0';
    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }

}

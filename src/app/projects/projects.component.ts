import { Component, OnInit } from '@angular/core';
import { routerTransition } from './project/router.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    routerTransition()
  ]
})
export class ProjectsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }
  
}

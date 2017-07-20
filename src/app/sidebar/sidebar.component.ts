import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import { ProjectService } from '../projects/project.service';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('divState', [
      state('collapsed', style({
        'height': 0
      })),
      state('expanded', style({
        'height': '!'
      })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  state = 'collapsed';
  arrow = 'fa fa-chevron-down';

  isActive = '';
  // public isCollapsed = false;
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  onAnimate() {
    if (this.state == 'collapsed') {
      this.state = 'expanded';

    } else {
      this.state = 'collapsed';

    }
    this.isActive == '' ? this.isActive = 'is-active' : this.isActive = '';

  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onGrowNav() {
    // var navGrow = document.getElementById('navGrow');
    // if (navGrow.clientHeight) {
    //   navGrow.style.height = '0';
    // } else {
    //   this.onGrowDiv();
    // }
  }

  onGrowDiv() {
    var growDiv = document.getElementById('grow');

    if (growDiv.clientHeight) {
      growDiv.style.height = '0';
      this.arrow = 'fa fa-chevron-down';
    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
      this.arrow = 'fa fa-chevron-up';
    }
  }

}

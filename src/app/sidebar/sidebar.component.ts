import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
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
  
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  onAnimate() {
    this.state == 'collapsed' ? this.state = 'expanded' : this.state = 'collapsed';
    this.isActive == '' ? this.isActive = 'is-active' : this.isActive = '';
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
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

  onNavigate(index) {
    this.projectService.navigatedProject.next(index);
  }

}

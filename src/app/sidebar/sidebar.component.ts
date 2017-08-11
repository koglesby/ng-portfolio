import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectService } from '../projects/project.service';
import { Project } from '../projects/project.model';
import { Router } from '@angular/router';

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

  activeState = '';

  subActive = '';

  id = 0;
  
  projects: Project[];
  
  constructor(private projectService: ProjectService, private router: Router) { }

  onAnimate() {
    this.state == 'collapsed' ? this.state = 'expanded' : this.state = 'collapsed';
    this.isActive == '' ? this.isActive = 'is-active' : this.isActive = '';
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    setTimeout(() => this.onGrowDiv(),0);
    this.projectService.projectActivated.subscribe(
      (id) => {
        this.id = id;
        (id < this.projectService.getProjectsLength()) ? this.activeState = 'active' : '';
      }
    );
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

  onNavigate(index, speed) {
    this.projectService.navigatedProject.next(index);
    speed == 'slow' ? setTimeout(()=> this.router.navigate(['/projects', index]), 160): this.router.navigate(['/projects', index]);

    this.clearActiveClass();
    document.getElementById(index.toString()).classList.add('active');
  }

  onNavigateMain() {
    this.activeState = '';
    this.clearActiveClass();
  }
  
  private clearActiveClass() {
    var activeLink = document.querySelector("li.active");
    activeLink ? activeLink.classList.remove('active') : console.log('foo');
  }

}

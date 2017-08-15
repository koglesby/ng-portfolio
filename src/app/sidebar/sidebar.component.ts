import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjectService } from '../projects/project.service';
import { Project } from '../projects/project.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
// import 'web-animations-js';


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
export class SidebarComponent implements OnInit, OnDestroy {
  state: string = 'collapsed';
  arrow: string = 'fa fa-chevron-down';
  projectSubscription: Subscription;
  
  isActive: string = '';
  activeState: string = '';
  subActive: string = '';

  id: number = 0;
  
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
        this.clearActiveClass();
        document.getElementById(id.toString()).classList.add('active');
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

  onNavigate(index: number, speed: string) {
    this.projectService.navigatedProject.next(index);
    if (speed == 'slow') {
      setTimeout(()=> this.router.navigate(['/projects', index]), 30)
    } else {
      this.router.navigate(['/projects', index]);
    }
  }

  onNavigateMain() {
    this.activeState = '';
    this.clearActiveClass();
  }
  
  private clearActiveClass() {
    var activeLink = document.querySelector("li.active");
    activeLink && activeLink.classList.remove('active');
  }
  
  ngOnDestroy() {
    this.projectSubscription.unsubscribe();
  }

}

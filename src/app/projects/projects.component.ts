import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';
import { routerTransition } from './project/router.animations';
import { Project } from './project.model';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // id: number;
  constructor(private projectService: ProjectService, private router: Router) { }
  // projects: Project[];

  ngOnInit() {
    // this.projects = this.projectService.getProjects();
    // this.projectService.projectActivated.subscribe(
    //   (item: number) => {
    //     this.id = item;
    //     console.log(item);
    //   }
    // )
  }
  
}
